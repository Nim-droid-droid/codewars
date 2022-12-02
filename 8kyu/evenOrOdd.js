/*
Even or Odd
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
// function evenOrOdd(number) {
//   // if(number % 2 === 0){
//   //   return "Even"
//   // }else{
//   //   return "Odd"
//   // }
//   return number % 2 === 0 ? "Even" : "Odd";
// }
// evenOrOdd(2) //Even

// const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd";

// REFACTOR
const evenOrOdd = n => (n % 2) ? 'Odd' : 'Even';