/*
Square Every Digit
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9 to the power of 2 is 81 and 1 to the power of 2 is 1.

Note: The function accepts an integer and returns an integer
*/

// function squareDigits(num){
//   // convert into String so i can split numbers up into individual elmnts & do math on them then concatenate
//   // split each num into its own elemnt so i can raise to the power of 2/ ** 2 
//   // loop thrugh eah elmnt in array & ** 2 
//   // join all the calculations together without space/concatenate
//   // convert string back to number (use unary operator +)
//   return +String(num).split('').map(e => Math.pow(e, 2)).join('')
// }

// REFACTOR
const squareDigits = num => +String(num).split('').map(e => Math.pow(e, 2)).join('')
squareDigits(9119)