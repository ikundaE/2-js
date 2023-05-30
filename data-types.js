/*
? JavaScript

Founded in 1996 by Brandon Eich
* client-side language (runs in the browser)
*interpreted language, not compiled
* first-class-function - function are treated like any other variables
* functional language
* object-oriented language
* prototype-based
* imperative
* ECMAScript - organization setting language standards
*/

/*
    ?comments
    *blocks of code that are not being interpreted
    * denoted by ///  for single-line
    * denoted by /* for multi-line
    * comments are read but not executed
    * helps students with not taking
    * helps devs to document their code
 */


/*
    ? Console object
    * gives access to the browser or node's debugging console
    * allows developers to view output from their programs
 */

console.log(2 + 2);


/*
    ? Data types
    primitives
        * string
        * number
        * boolean
        * null
        * undefined
        * not a number (NaN)
    Reference
        * array
        * object
        * set
 */


/*  
    ? Numbers
    * any integer or decimal
*/

console.log(25);
console.log(3.14);
console.log(typeof 1776);

/* 
    ? Strings
    * primitive data type representing characters (text)
    * Enclosed by ' ', " ", ` `.
    * strings are immutable (unable to be modified)
    * are indexed
*/

console.log("This is text");
console.log("This is also text");
console.log(`Text using string interpolation backticks`);

// We can add (concatenate) strings

console.log("Hi, I'm Paul" + " and I'm 24 years old");

// String index
console.log("Germany");
// starts at zero, not one
console.log("Germany"[0]);
console.log("Germany"[1]);
console.log("Germany"[2]);
console.log("Germany"[3]);
console.log("Germany"[4]);
console.log("Germany"[5]);
console.log("Germany"[6]);
console.log("Germany"[7]);
let a= "Germany";
for (i in a) {
    console.log(i);
}

/* 
    ? String Interpolation
    * process of including space for an expression

    Syntax:
    `string ${ expression } string`
*/

console.log(`My name is Paul and I am ${20 + 4} years old`);
console.log("My name is Paul and I am ", 20 + 4, "years old");

/* 
    ? String Properties & Methods
    . length
        * gives us the length of the string
    . slice()
        * returns section of a string
        * takes optional start and stop parameters
    . toUpperCase()
        * returns new string with all chars uppercase
    . toLowerCase()
*/

console.log("Kraftfahrzeug-hafpflichversicherung");
console.log("Kraftfahrzeug-hafpflichversicherung".length);
console.log("Mr. Niemczyk".slice(4));
console.log("Mr. Niemczyk".slice(0, 3));
console.log("memorialday2023");
console.log("memorialday2023".toLocaleUpperCase());

/* 
    ? Boolean
    * binary values
    * either true (on) or false (off)
    * examples of falsey values:
        * false
        * 0
        * undefined
        * null
        * NaN
        * "" (empty string)
*/

console.log(true);
console.log(false);
console.log(2 == 2);
console.log(2 == 5);

// Boolean() object returns whether value is truthy or falsey
console.log(Boolean(1));
console.log(Boolean(" "));

/* 
    ? Null & Undefined
    * falsey values
    * null - means nothing
    * undefined - default value
*/

/* 
    ? Operators
    * addition (+)
    * substraction (-)
    * multiplication (*)
    * division (/)
    * exponent (**)
    * dot (.)
    * modulo (%)
    * assignment (=) (single)
    * comparison (==) (double)
    * strict comparison (===) (triple)
*/

// Assignment (=)

let teacher = "Paul";

// Comparison (==)

console.log("paul" == "Paul");

// Strict comparison (===)

console.log(2 == "2");
console.log(2 === "2");

/* 
    ? Type Coercion
    * JS is a weakly-typed programming language
    * doesn't require data type definition
    * comparison operator (==) performs type coercion before resolving expression
    * we can use strict equality (===) to avoid type coercion
*/

console.log(2 + "2");
/* 
    1. in order to satisfy the following expression
    2. js coerces number data type into string data type
    3. two strings are concatenated
*/
console.log(typeof(2 + "2"));

// ! know what type coercion is but DON'T USE IT!

/* 
    ? Modulo (%)
    * check for the remainder of long division
*/

console.log(12 % 3);
console.log(12 % 5);

/* 
    ? Expressions
    * unprocessed values grouped using the ()
    * evaluated to be truthy or falsey
    * expression evaluate
*/

console.log( Boolean(2==2 ));
console.log( Booleab ("Paul" == "Paul"));


/* 
    ? Statements
    * keyword
    * expression
    * code block
    * statements evaluate and execute bcode block when invoked
    * 
    * ex:  conditional statement
    * 
    * if (true) {
    *   run this code
    * }
*/