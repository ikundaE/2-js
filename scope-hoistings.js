/* 
    ? Scope
    * used to determine how information in different blocks of code can be accessed.

    ? Five types of scope:
    * global/window
    * block
    * function
    * module
    * lexical
*/

/* 
    ? Global Scope
    * outermost scope
    * window object when in client
    * js file when in node
    * accessible from every other scope
*/

let globalScopeVar = "This is a global scope variable"
console.log(globalScopeVar)

/* 
    ? Function Scope
    * accessible only inside of the function
*/

function scope() {
    let fxsv = "This is a fx scope variable"
    // console.log(fxsv)
}
scope()
// console.log(fxsv) //!referenceError: fxsv is not defined

/* 
    ? Block Scope
    * can be anywhere there are { }
*/

if (true) {
    let bsv = (" This is a block scope variable");
    console.log(bsv);
}

{
    console.log("This is also within block scope");
}

// console.log(bsv) // ReferenceError

/* 
    ? Lexical Scope
    * variables are accessible by their nested position
    * inner fx scope can access outer fx scope
*/

function outerFx() {
    // outer scope
    let ofxv = "Outer scope variable"

    function innerFx() {
        // inner scope
        let ifxv = "inner scope variable"
        console.log(ofxv)
        return ifxv
    }

    return innerFx()
}

console.log(outerFx())

/* 
    ? Module Scope
    * encapsulates objects nested inside of other modules or files
    * allows the user in other files
*/

// imports exports from a file and assigns to a variable
const states = require("./states")
console.log(states)


/* 
    ? Hoisting
    * JS' parsing engine reads top to bottom, left to right.
    * JS' interpreter runs the code twice.
        * first, it looks for fx declarations and VARiables and hoists them
        * it allocates memory space to those declarations
        * then it executes the code line-by-line
*/

// console.log(myName) // Reference Error
let myName = "Paul Niemczyk"
console.log(myName)

console.log(address) // runs, but shows undefined
var address = "123 Main St"
// console.log(address)

// ? Function Declarations ARE hoisted

displayName("Paul")
function displayName(str) {
    console.log(`Hello ${str}`)
}
displayName("John")

// ? Function Expressions ARE NOT hoisted

// capitalize("melissa") // ReferenceError
let capitalize = function(str) {
    console.log(str.toUpperCase())
}
capitalize("melissa")

function run() {
    var foo = "foo"
    let bar = "bar"
    console.log(foo, bar)
    {
        var moo = "moo"
        let baz = "baz"
        console.log(moo, baz)
    }
    // console.log(baz)  !ReferenceError: scope to block
    console.log(moo) //works : scope to immediate function
}
run()

// global
{
    // block
    {
        // block
        var something = "This is something"
        
        function y() {
            {
                var somethingElse = "This is something else"
            }
            console.log(somethingElse)
        }
        y()
    }
}
console.log(something)
// console.log(somethingElse) //ReferenceError: scoped to y fx

// ! THIS IS BAD - don't use hoisting to your "benefit"