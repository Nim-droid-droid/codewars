/*
MakeUpperCase
Write a function which converts the input string to uppercase.
*/

// function makeUpperCase(str) {
//   return str.toUpperCase()
// }

const makeUpperCase = str => str.toUpperCase();

makeUpperCase("")         // ""
makeUpperCase("hello")    //"HELLO"
makeUpperCase("Hello")    //"HELLO"
makeUpperCase("HELLO")    //"HELLO"