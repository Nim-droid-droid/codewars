/*
Sum of the first nth term of Series
Task:

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:

You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)

1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

function SeriesSum(n)
{
  // As always its codewar uses math to make this tricky
  // What do all these numbers have in common? What could they be? theyre not prime, or cubed.
  // 1/1 + index * 3
  //1 / 1 = 1 + 1 (index) * 3 = 4 (so 1 divided by 4) 1/4

  let sum = 0;
  for(let i=0; i<n; i++){
    sum += 1 / (1 + i * 3);
  }
// The toFixed() method rounds the number to a specified number of decimals. Then converts a number to a string.
  // look for the number of digits to appear after the decimal 
  // In this case its 2 (rounded up) digits after the decimal point .
  return sum.toFixed(2)
}
SeriesSum(1)  //"1.00"
SeriesSum(2)  // "1.25")
SeriesSum(3)  // "1.39")
SeriesSum(4)  // "1.49"