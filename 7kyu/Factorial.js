/*
Factorial
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here.
*/


function factorial(n){ 
  // with each loop take -1 from n, then * n with fact var

  // cant use reduce, map cuz n is not iterable

  // 1 cuz 1 * anything = anything
  // let fact = 1;
  
  if(n < 0 || n > 12){
     throw new RangeError();
  }
// else isnt necessary, just for clarity
  // else{
    // long as i is less than or equal to 1 for loop will keep iterating & i will increment each loop
    // Y <= & not = cuz i is 1 so not = to n (3)
    // Y <= & not < cuz then it wouldnt include i at 3, it would finish executing at 2nd loop & return 2 instead of 6
    // for(let i=1; i<=n; i++){
    //   fact*=i;
    //   // fac = 1*1 = 1
    //   // fac = 1*2 = 2
    //   // fac = 2*3 = 6    the condition is met i (3) is = to n hence for loop finishes executing here
    // }   

    // ? 1  ->  By convention the value of 0! (& 1! factorial) is 1
      // So if n = 0 or n = 1, return 1
  return n <= 1 ? 1 : n * factorial(n-1)
  // }
//   return fact;
}


factorial(3)    //6    "factorial for 3 is 6"
factorial(0)    //1    "factorial for 0 is 1"
factorial(1)    //1    "factorial for 1 is 1"
factorial(2)    //2    "factorial for 2 is 2"