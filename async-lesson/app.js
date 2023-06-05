console.log("Async Lesson Notes")

/* 
    ? Promises
    * an object that may produce a singular value in the future
    * Three States
        * Pending (unfinished)
        * Fulfilled (complete with result)
        * Rejected (error)
    * allow code to execute without having to wait for its completion
*/

let myPromise = new Promise((resolve, reject) => {
    let sum = 2 + 2
    // sum == 4 ? resolve("Success") : reject("Failed")

    // Pending promise example
    setTimeout(() => {
        sum == 3 ? resolve("Success") : reject("Failed")
    }, 4000)
})

// Returns a promise. It does not allow us to see information
console.log(myPromise)

// In order to get tangible data out of a Promise object, we must resolve it.
let theResult
myPromise
    .then(msg => console.log(msg))
    // resolver that executes a fx when promise has been fulfilled
    .catch(msg => console.log(`Error, ${msg}`))
    // executes a fx when a promise has been rejected (error handling)
    .finally (() => console.log ("this code runs after promise is done"))
console.log("Code running in global scope")


/* 
    ? Asynchronous Functions
    * introduced in ES7
    * alternative to writing promises
    * a function that returns a promise object
    * allows us to resolve or reject a promise
    
    Syntax:
    * async function myFx() {} 
    ! Function declaration
    * const myFx = async function() {}
    ! Function expression
    * const myFx = async () => {}
    ! Arrow Function
*/

function getData() {
    setTimeout(() => {
        return "Some data PLEASE LET ME SEE YOU!!!"
    }, 3000)
    // return "Some data"
}

let data = getData()
console.log(data)
// Returns undefined because return statement happens 3s after invocation

async function asyncFunction() {
    return "Async function value"
}
// Returns a promise that must be resolved
console.log(asyncFunction())

asyncFunction().then(result => console.log(result))

// ? How can we use the result of a promise object in another function?

/* 
    ? Await Keyword
    * can be utilized only inside of asynchronous functions
*/

function first() {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve("Success"), 3000)
        } else {
            reject("Promise rejected")
        }
    })
}

async function pepTalk() {
    let result = await first()
    // The await forces this function to wait out the timeout before continuing
    console.log(`It's all about ${result}`)
}
console.log("Code after pepTalk function")
pepTalk()