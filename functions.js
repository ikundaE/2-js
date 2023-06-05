/* 
    ? Functions
    * a block of reusable code; it can:
    * take in arguments thru its paramters (doors to inside fx)
    * perform an action
    * and return a result

    ? There are two types of functions:
    * function declaration
        * hoisted
    * function expression
        * not hoisted
    
    ? Functions
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming thru the parameter is called an argument
    * can only have one return statement value
    * if no return is provide, it defaults to undefined
    

    Syntax:

        function identifier(parameter, parameter, ...) {
            function code block
            return statement
    }

*/

// Function definition
function sayHello() {
  return "Hello May Cohort";
}

// Function invocation (calling)
let catchVariableForFunction = sayHello();
console.log(catchVariableForFunction);

function sayGoodbye() {
  console.log("Goodbye");
}

sayGoodbye();

let goodbyeCatch = sayGoodbye();

console.log(goodbyeCatch);

function greetStudent(student) {
  return `Hello, ${student}`;
}

console.log(greetStudent("Dante"));
console.log(greetStudent("Tiffania"));
console.log(greetStudent("Andy"));

// Take a string and return an array

function strToArr(str) {
  let arr = [];
  for (i of str) {
    arr.push(i);
  }
  return arr;
}

let paul = strToArr("paul niemczyk");
console.log(paul);
let cyrus = strToArr("cyrus fullam");
console.log(cyrus);

/* 
    ? Function Expression
    * utilizes a variable as a placeholder

    Syntax:

    let identifier = function(params) {
        code block
        return statement
    }

*/

let nameAge = function (name, age) {
  return `Your name is ${name} and you're ${age} years old.`;
};

console.log(nameAge("Melissa", 28));

/* 
    ? Challenge
    * Create a function that will give you a result of a quadratic formula based on all of the necessary factors
    * Check if the data type is Number. If not, return, "please use whole numbers only"
    * Please return the result but also the value of the top and bottom separately
    
    -b+-sqrt(b**2 -4ac)/2a
*/

/* 
    ! My quadratic formula codes 
result = []
function findSqrt(a,b,c){
   /*  typeof (a) != Number
        ?console.log (`${a} is not a number`)
        :typeof (b) != Number
        ?console.log (`${b} is not a number`)
        :typeof (c) != Number
        ?console.log (`${c} is not a number`) 
    
        count = 0;
        arr = [];
        if (typeof a != 'number'){
            console.log (`${a} is not a number`)
        }else if (typeof (b) != 'number'){
            console.log (`${b} is not a number`)
        }else if (typeof (c) != 'number'){
            console.log (`${c} is not a number`)
        }else{
            while (count < 2){
                switch(true){
                    case count === 0 :
                        arr.push((-b + Math.sqrt(b**2 -4*a*c)) / 2*a);
                        break;
                    case count === 1:
                        arr.push((-b - Math.sqrt(b**2 -4*a*c)) / 2*a);
                        break;
                    default:
                        console.log (`something failed!`);
                }
                count = count + 1 ;
            }
        }
        return arr;
}

result = findSqrt(1, -11 ,24);
console.log(`\nThe result of the quadratic formula is: ${result}`); */

function quadraticFormula(a, b, c) {
  let sqrtResult = Math.sqrt(b ** 2 - 4 * a * c);
  if (isNaN(sqrtResult)) {
    return "Please make sure you use whole numbers which result in a positive discriminant";
  } else {
    let addResult = ((-b + sqrtResult) / 2) * a;
    let subResult = ((-b - sqrtResult) / 2) * a;
    return `The solution is ${addResult} and ${subResult}`;
  }
}

let qResult = quadraticFormula(1, -11, 24);
console.log(qResult, typeof qResult);

/* 
    ? Pythagoream Theorem Challenge
    * right triangle has three sides
    * the longest side c is calculated by taking the sum of:
    * a**2 and b**2
    * the formula is as follows c = sqrt(a**2 + b**2)
    * Create a function expression that takes two triangles sides
    * return the hypotenuse (c side)
    * hint: Math object has a .sqrt() method
    ! 37 ish
    
*/

/* 
    !my codes
function pythagoreanResult (i, j){
    sumOfsqr = i ** 2 + j ** 2;
    if (isNaN (sumOfsqr)){
        return "Please make sure you use whole numbers"
    }else {
        let c = Math.sqrt (sumOfsqr);
        return c;
    }
}

k = pythagoreanResult(3, 4);
console.log(`\nThe C side value is : ${k}`) */

let pythagoreamTheorem = function (a, b) {
  // let sideSquared = a ** 2 + b ** 2;
  // let hypotenuse = Math.sqrt(sideSquared);
  // return `The hypotenuse is ${hypotenuse}`;
  return Math.sqrt(a ** 2 + b ** 2);
};

console.log(pythagoreamTheorem(5, 7));

/* 
    ? Arrow Functions
    * introduced in ES6
    * concise way of writing functions
    * part of fx expression family
    * do not bind to .this or super (more on that in Classes)
*/

/* 
    ? Concise Body Arrow Function
    * can have none or one paramter only
    * code block must not have { }
    * return statement must be implicit
*/

let greetEveryone = () => `Hello everyone`;

let greetDoctor = (drName) => `Hello, Dr. ${drName}`;
console.log(greetDoctor("Enoch"));

console.log(greetDoctor("Dante"));

// ? Block Body Arrow Function

let concatenateString = (str1, str2) => {
  if (typeof str1 == "string" && typeof str2 == "string") {
    return str1 + str2;
  } else {
    return `\nYou can only pass string values as arguments\n`;
  }
};

console.log(concatenateString(227, "Niemczyk"));
console.log(concatenateString());
console.log(concatenateString("enoch ", "ikunda"));

// ? Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("I'm an IIFE");
})();

// FizzBuzz Challenge!
/*
  Create a function that takes a parameters called start and stop.
  Loop over numbers from start to stop
  If the number is divisible by 3, print "Fizz"
  If the number is divisible by 5, print "Buzz"
  If the number is divisible by 3 and 5, print "Fizz Buzz"
  If the number is not divisible, print the number only
  Invoke your function to make sure it works.
*/

/* 
    !my codes
function fizbuzz(start, stop) {
  if (isNaN(start) || isNaN(stop) || stop < start) {
    return `Please make sure you use whole numbers or make sure ${stop} is greater than ${start}`;
  } else {
    for (let i = start; i <= stop; i = i + 1) {
      switch (true) {
        case i % 15 == 0:
          console.log(`\n${i} Fizz Buzz`);
          break;
        case i % 3 == 0:
          console.log(`\n${i} Fizz!`);
          break;
        case i % 5 == 0:
          console.log(`\n${i} Buzz`);
          break;
        default:
          console.log(`\n${i} not a multiple of none!`);
      }
    }
  }
}
fizbuzz(4, 300); */


let fizzBuzz = (start, stop) => {
    for (let i = start; i <= stop; i++) {
        i % 15 === 0
            ? console.log("Fizz Buzz")
            : i % 3 === 0 
            ? console.log("Fizz")
            : i % 5 === 0 
            ? console.log("Buzz")
            : console.log(i)
    }
}

fizzBuzz(47, 85)

// Reverse Words in a String

/* 
    Write a function that takes a string as input and returns the same string with the order of words reversed.

    For example, if the input string is "Hello World!", the function should return "!World Hello".

    Your task is to implement the reverseWords function and test it with different inputs.
*/


/* 
    !my codes
function splitAndReverse (str){
    let reverse = " ";
    for (i = str.length; i >= 0; i--){
        reverse += str.charAt(i);
    }
    // arrReverse
    console.log (`\n ${reverse}`);

}
splitAndReverse ("Hello world!")  */

let reverse = str => {
    let reversed = ""
    for (i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

console.log(reverse("Niemczyk"))




