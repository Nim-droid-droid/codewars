/*
Count of positives / sum of negatives
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// function countPositivesSumNegatives(input) {
//   // increment index for every num > 0
//   // for every num < 0, add them up together

//   // !input is not true, meaning input is false = empty/null
//   if (!input || input.length == 0) return [];
//   let sum = 0, count = 0;
//   input.forEach(function(el){ if (el > 0) count++; else sum+=el});
//   return [count, sum];
// }
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])

// REFACTOR
// use ternary, filter() & reduce()
// function countPositivesSumNegatives(input) {
//   return !input || input.length == 0 ? [] : [input.filter(num => num > 0).length, input.filter(num => num < 0).reduce((pre, val) => pre + val, 0)];
// }

const countPositivesSumNegatives = input => !input || input.length == 0 ? [] : [input.filter(num => num > 0).length, input.filter(num => num < 0).reduce((pre, val) => pre + val, 0)];
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
