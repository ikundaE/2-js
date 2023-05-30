/* 
    ? Variables
    * containers that store data in memory
    *declaration
        * allows memory space to be reserved
        * start with let, var, or const
        * cannot start with a number or character other than $ or _
    * initialization
        * assignment of data value
        * if no value is assigned, it's undefined by default
        * can be any value or data type (str, int , arr, fx, class, etc.)
        * can be reassigned (except for const)  
*/
const process = require("process");
console.log(process.pid);

// Variable Declaration
let firstName;
console.log(firstName);

// Variable Initialization (and reassignment)
firstName = "Paul";
console.log(firstName);

// Variable Declaration and Initialization
let lastName = "Niemczyk";

// (a)  (b) (c)     (d)
let address = "123 Main St, Salem, MA";
    // (e)     (f)
    
// (a) - keyword
// (b) - variable identifier
// (c) - assignment operator
// (d) - value or initializer
// (e) - variable declaration
// (f) - variable initilization or value assignment

var age = 26;
console.log(age);
// var is hoisted whereas let or const are not
// do not use it

// ? Const variable CANNOT have a reassigned value
const ssn = "123-45-6789";
console.log(ssn);
// TypeError: assignment to constant variable
// ssn = "333-33-3333";
// console.log(ssn);

/* 
    ? Coding practice for Variables
    * be concise (ex: firstName instead of usersFirstName)
    * be specific (ex: value instead of i)
    * utilize camelCase (most popular in JS)
    * snake_case
    * PascalCase
    * skewer-case
    * SCREAMING_CASE
*/


/* 
    Challenge

    Set a few variables:
    fName, lName, houseNumber, aptNumber (if applicable)
    street, city, state, post code
*/
    let fName = "Frodo";
    let lName = "Baggins";
    let houseNumber= 123;
    let aptNumber = NaN;
    let street = "Tolkien Trail";
    let city = "The-Shire";
    let state = "Middle-Earth".toLowerCase();
    let postCode = "04104";
/*
    Once done, concatenate or interpolate them together into new variable to create your address stamp
*/
    let officialName = fName + " " + lName;
    let userAddress = houseNumber + " " + street + " Apt: " + aptNumber + " " + city + " "
        + state.toUpperCase() + " " + postCode;

        //or
    let stamp = `${fName} ${lName} \n ${houseNumber} ${street} \n ${city} ${state}  ${postCode};`
/*
    Create a new variable that utilizes all of those variable values
*/
    let userData =  officialName + "\n" + userAddress ;
/*    
    Console log it
*/
    console.log ("\nADDRESS STAMP\n");
    
/*
    !SPICEY MODE - assign the value of state to be lowercase but when you console log your address stamp, utilize a method to make sure it's capitalized.

*/
    console.log ("\n" + userData);
    console.log(stamp)
    console.log(17/0);             

