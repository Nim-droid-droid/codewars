/*
Make a function that does arithmetic!
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!
*/

function arithmetic(a, b, operator){
  //your code here!
  
  // const m = {
  //   'add': + ,
  //   'subtract': - ,
  //   'divide': / ,
  //   'multiply': *
  // };
  // return a map[operator] b; THIS DOESNT WORK
  // ERROR: Unexpected identifier 'map' or map Isn't defined 

  // Whenever I want to search for something (key) & return a val, use obj
  // The " " around key isn't necessary, it will still match up the str to key without it
  const map = {
    add : a + b,
    'subtract': a - b,
    'divide': a / b,
    'multiply': a * b
  };

  return map[operator];
}
arithmetic(1, 2, "add")    //3    "'add' should return the two numbers added together!");
arithmetic(8, 2, "subtract")     //6    "'subtract' should return a minus b!");
arithmetic(5, 2, "multiply")     //10     "'multiply' should return a multiplied by b!");
arithmetic(8, 2, "divide")     //4    "'divide' should return a divided by b!");