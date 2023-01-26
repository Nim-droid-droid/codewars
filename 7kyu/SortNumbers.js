/*
Sort Numbers
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

// function solution(nums){
//   // How to check for null? if arr is empty meaning 0 el thats a way/condition to check for null
//   // return nums.length === 0 ? nums.sort((a,b) => a-b) : [];
//   // return nums.length >= 1 ? nums.sort((a,b) => a-b) : [];
//   // ERROR: Cannot read properties of null (reading 'length')
//   // This error indicates that the code is trying to compute the length property on a null variable. A null variable holds no or nonexistence value. Hence trying to calculate the length of a non-existent value is not possible. 
//     // (but Y doesnt it work when i look for >= 1 ?)
//       // The matter what the condition is, if the input is null, you cannot call .length on it

//     //Solution 1: Providing the default fallback value
//     // Solution 2: Checking data type before using the length property
//     // Solution 3: Instead of checking for length property to determine if its null, directly check for null 

//   return nums !==null ? nums.sort((a,b) => a-b) : [];
// }

// if nums does NOT equal null, return nums in sorted order. Otherwise return empty array
// const solution = nums => nums !== null ? nums.sort((a,b) => a-b) : [];


// If nums exist (meaning it doesn't have the val null/nil but an existing val) then return nums in sorted order. Otherwise return empty array
const solution = nums => nums ? nums.sort((a,b)=>a-b) : []

solution([1,2,3,10,5])  //[1,2,3,5,10]
solution(null)  //[]
solution([])  //[]
solution([20, 2, 10])  //[2,10,20]
solution([2, 20, 10])  //[2,10,20]