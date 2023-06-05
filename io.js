/* 
    ? IO & Callbacks
    * Process
        * an event that runs in foreground or background on your machine
    * Node.js allows access to its process via a process object
    * This allows us to process external input and internal output (IO)
    * We do this by using process.stdin and process.stdout
*/

let process = require("process")

console.log(`This is an output from Node. Process PID: ${process.pid}`)

// process.stdin.once("data", function (input){
//     console.log(`This is input repeated: ${input.toString()}`)
// })

/* 
    * .once() is an event listener. It listens for data event
        * it takes event
        * and callback function
        * callback is a function that is triggered when an event occurs
*/

function handleInput(input) {
    console.log(input.toString())
}

// .on() method allows continuous listen to a data stream
// process.stdin.on("data", handleInputStdOut)
// (1)   (2)  (3)  (4)     (5)
/* 
    * 1. Node's process interface
    * 2. Input data stream
    * 3. Event listener method
    * 4. Event we're listening for
    * 5. Callback fx which runs when the event occurs
*/

function handleInputStdOut(input) {
    process.stdout.write(`The name is: ${input.toString().trim()}\n`)
}

// ? Readline

// Import readline
const readline = require("readline")
// Create interface
const rl = readline.createInterface({ input: process.stdin, output: process.stdout})
// Ask a question and use callback fx to process input
rl.question("What is your name?", (input) => {
    if (input.trim() == "Enoch") {
        // creates an output
        rl.setPrompt(`Hello, ${input}!`)
        // generates output
        rl.prompt()
        // closes the socket
        rl.close()
    } else {
        rl.setPrompt(`Your name is ${input}`)
        rl.prompt()
        rl.close()
    }
})

/* function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve)
    })
}

async function start() {
    let questionOne = await ask("Where are you from?")
    console.log(questionOne)
}

start() */