/*
Parse nice int from char problem
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/

// theres only 1 case given in the test unit so i can assume all strings follow the format: all strings will be in the format of 'x years old' where x (the [0] index of a String is what i want to convert to a int) is an integer 0-9.


// function getAge(inputString){
// // return the girl's correct age as an integer. 
// // convert & return the 1st char of inputString as a number

// // return parseInt(inputString.charAt(0));

// // still works WHY:
// // return parseInt(inputString); 

// // return Number(inputString[0])

// return +inputString[0];
// }

const getAge = inputString => +inputString[0];
getAge("4 years old") //4