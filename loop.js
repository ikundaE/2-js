/* 
    ? Loops
    * allow us to execute a block of code repeatedly
    * they stop once an exit condition has been met
*/

/* 
    ?For loop
*/

for (let i = 0; i <= 10; i = i + 1){
    console.log(i);
}

let longWordEN = "supercalifragilistiexpialidocious";
for (count = 0; count <= longWordEN.length - 1; count = count + 1) {
	console.log(`Index: ${count}, Letter: ${longWordEN[count]}`);
}

/* 
    ? For-in Loop
    * allows us to seek an index value of an interable
    * for-in does not require an index number
    * for-in does not require a stop statement
*/
let longWordDE = "kraftfahrzeug-hafplifchtversicherung";
for (i in longWordDE) {
	console.log(`Index: ${i} Letter ${longWordDE[i]}\n`);
}

for (i of longWordDE){
    console.log(`\n ${(i)}`)
}

/* 
    Difference between for-in and for-of in terms of use?
    * For-in allows us to loop over items that are not an array
    * For-of only works if an item is indexed linked an array or string
*/

/* 
    ? While Loop
    * executes a statement inside of a code block
    * it does so as long as a while condition evaluates to true
    
    Syntax:

    while (true) {
        do this until false
    }
*/

let loopCount = 0;

while (loopCount <= 10) {
	console.log(loopCount);
	loopCount = loopCount + 1;
}


/* 
    ? Challenge

    * Using a traditional for loop, set an index to 2.
    * Make a condition where if that number is greater than -100
    * You will be substracting 4
    * Console log each iteration
    
    HINT: step can be i++ i-- i = i + 1 or i += 1
*/

for (let i=2; i>= -100; i -= 4){
    console.log(`\nIndex: ${i}`);
}


/* 
    ? Challenge 2

    * Loop over an array with for-in or for-of
    * Console log each animal's respective "sound" (ex: meow for a cat)
    * EXTRA: use a ternary
*/

let animalArray = ["pig", "cat", "mouse", "dog", "bird", "subaru"]
for (i of animalArray){
    switch(i){
        case "bird":
            console.log (`\n chipchip for ${i}`);
            break;
        case "cat":
            console.log (`\n meow for ${i}`);
            break;
        case "dog":
            console.log (`\n woof for ${i}`);
            break;
        case "mouse":
            console.log (`\n squeak for ${i}`);
            break;
        case "pig":
            console.log (`\n oink for ${i}`);
            break;
        default:
            console.log("\n what the -    ????");
    }
}

let doCount = 0;

do {
	console.log(doCount);
	doCount++;
} while (doCount <= 10);

/* 
    ! FizzBuzz Challenge
    * print the numbers from 1-100
    * if a number is a multiple of 3, print "Fizz"
    * if it's a multiple of 5, print "Buzz"
    * if it's a multiple of both, print "Fizz Buzz"
    * otherwise, print the number
*/


let lineNumber = 100;

for (let i = 1; i <= lineNumber; i = i + 1) {
  switch (true) {
    case i % 15 == 0:
    console.log(`\n${i} Fizz Buzz,`);
    break;
    case i % 3 == 0:
      console.log(`\n${i} Fizz!`);
      break;
    case (i % 5) == 0:
      console.log(`\n${i} Buzz`);
      break;
    default:
        console.log("\n not a multiple of none!")
  }
}