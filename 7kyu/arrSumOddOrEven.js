/*
Odd or Even?
Task:

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript 
*/

function oddOrEven(array) {
  let sum=0;
   //enter code here
   let arr = array.map(el => {
    sum+=el
   });
   if(sum % 2 === 0){
    return 'even';
   }else{
    return 'odd'
   }
} 
oddOrEven([0, 1, 4])

