/*
Sum of a sequence
Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples
  return begin + sequenceSum(begin + step, end, step);
2 + 4,2,2
2 + 4,6,2
1 + 2,5,1

2,2,2 --> 2   //2 step 2,4,6??? why are these all 2
2,6,2 --> 12 (2 + 4 + 6)  //2 step 2,4,6
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)  //1 step 1,2,3,4,5
1,5,3  --> 5 (1 + 4)  //3 step 1, 4
This is the first kata in the series:

Sum of a sequence (this kata)
Sum of a Sequence [Hard-Core Version]
https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript 
*/


function sequenceSum(begin, end, step) {
    // May the Force be with you
  let sum = 0
  for (let i = begin; i <= end; i += step) {
    sum += i
  }
  // If begin value is greater than the end, function should returns 0
    // sum is set at 0 initially so just return sum
  return sum
}
sequenceSum(2,2,2)
