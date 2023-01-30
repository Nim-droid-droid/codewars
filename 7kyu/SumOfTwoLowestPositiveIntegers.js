/*
Sum of two lowest positive integers
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {  
  // sort arr Then find the two lowest integers and add up
  // return [...numbers].sort((a,b) => a-b).map(el => el[0] + el[1]) 
    //returns (5) [NaN, NaN, NaN, NaN, NaN]
  
  //use slice to et the 2 1st nums & add
  // const lowNums = [...numbers].sort((a,b) => a-b).slice(0,2)
  // return lowNums.map((el, i) => el + el[i+1]) 
    //returns (2) [NaN, NaN]
    // still having the Nan issue & its returning an arr of 2 instead of a sum (but that can be fixed with storing them in a var)
  
  return [...numbers].sort((a,b) => a-b).slice(0,2).reduce((acc, el)=> acc+=el, 0)
}


// const sumTwoSmallestNumbers = numbers => [...numbers].sort((a,b) => a-b).slice(0,2).reduce((acc, el)=> acc+=el, 0);

const sumTwoSmallestNumbers = numbers => numbers.sort((a,b) => a - b).slice(0, 2).reduce((acc, el) => acc + el);

sumTwoSmallestNumbers([15, 28, 4, 2, 43])    //6 
sumTwoSmallestNumbers([23, 71, 33, 82, 1])   //24
sumTwoSmallestNumbers([5, 8, 12, 19, 22])    //13
sumTwoSmallestNumbers([3, 87, 45, 12, 7])    //10
sumTwoSmallestNumbers([52, 76, 14, 12, 4])   //16