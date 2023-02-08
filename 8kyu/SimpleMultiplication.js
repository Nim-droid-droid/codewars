/*
Simple multiplication
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

// function simpleMultiplication(number) {
//   // if number is even, * by 8
//   // if(number%2===0){
//   //   return number*8
//   // }else{
//   //   return number*9
//   // }

//   return number % 2 === 0 ? number * 8 : number * 9;
// }

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;

simpleMultiplication(2)    //16
simpleMultiplication(1)    //9
simpleMultiplication(8)    //64
simpleMultiplication(4)    //32
simpleMultiplication(5)    //45