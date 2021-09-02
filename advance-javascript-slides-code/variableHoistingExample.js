//VARIABLE HOISTING
// Try any part one at a time

var myname;         // Declare Variable
myname = 'Aamna';   // Initialize variable
console.log(myname) // result: Aamna



/*********************************** */

// var myname;          // Declare Variable
// console.log(myname)  // result: Undefined
// myname = 'Aamna';    // Initialize variable



/*********************************** */

// console.log(myname)  // result: Undefined
// myname = 'Aamna';    // Initialize variable
// var myname;          // Declare Variable



/*********************************** */

// console.log(myname)  // result: ERROR: myname is not defined
//myname = 'Aamna';     // Initialize variable

/*********************************** */
// var a = 'Johnny Bravo'; // Global scope
// function iota() {
//     var a = 'Momma'; // Local scope
//     console.log(a); // Outputs 'Momma'
//     console.log(window.a); // Outputs 'Johnny Bravo'
// }
// iota();
// console.log(a);