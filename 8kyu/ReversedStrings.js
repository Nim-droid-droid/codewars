/*
Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// function solution(str){
//   return str.split('').reverse().join('');
// }

// const solution = str => str.split('').reverse().join('');

// Instead of using split('') use ... spread operator to convert a string to an array of characters
const solution = str => [...str].reverse().join``;
solution('world')