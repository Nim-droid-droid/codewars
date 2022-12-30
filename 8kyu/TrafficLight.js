/*
Thinkful - Logic Drills: Traffic light
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript 
*/

// function updateLight(current) {
//   // short circuiting
//   // return current == "green" && "yellow" || current =="yellow" && "red" || current =="red" && "green"

//   // TO
//   return current == "green" ? "yellow" : current =="yellow" ? "red" : "green";
// }

// const updateLight = current => current == "green" ? "yellow" : current =="yellow" ? "red" : "green";


// Since im looking for 2+ vals, use obj (+ key)
// const updateLight = current => {
//   return {
//     green: 'yellow'
//     yellow: 'red',
//     red: 'green',
//   }[current];
// }

const updateLight = current =>
// (Same principle as IIFE) need to encapsulate the key + val pairs in () cuz due to {} js is expecting an expression or to put it in a handler, im not doing either. But encapsulating it in () will envoke this function regardless
  ({green: `yellow`, yellow: `red`, red: `green`})[current];
updateLight("green") //"yellow"
updateLight("yellow") //"red"
updateLight("red") //"green"