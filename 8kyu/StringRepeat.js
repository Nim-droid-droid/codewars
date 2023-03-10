/*
String repeat

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// function repeatStr (n, s) {
//   // s repeated n times
//   return s.repeat(n);
// }
const repeatStr = (n, s) => s.repeat(n);
repeatStr(3, "*")    //"***"
repeatStr(5, "#")    //"#####"
repeatStr(2, "ha ")    //"ha ha "