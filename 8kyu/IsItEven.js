/*
Is it even?
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

// const testEven = n => n%2===0 ? true : false;
//if this condition is met itll return true, & since no if() or other checking, if condition is not met, itll return false.
// const testEven = n => n % 2 === 0;
const testEven = n => (n % 2) == 0;

testEven(0)    //true
testEven(0.5)    //false
testEven(1)    //false
testEven(2)    //true
testEven(-4)     //true