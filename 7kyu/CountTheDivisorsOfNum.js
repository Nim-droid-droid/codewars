/*
Count the divisors of a number

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/

/*
How many divisors (also called factors) does a number have?
How to find their divisors of a number?
*/

function getDivisorsCnt(n){
  // count how many numbers go into n with a Remainder of 0
    // loop from 1 (y 1? cuz every integer has At least two divisors: 1 & itself) to n & check if the num evenly divides into n, if it does increment the count var. Otherwise Continue to the & check the next integer
  
  let count=0;
  // i>0 cuz the 1st divisor of any num is 1 so this will keep looping til i is no longer > 0 (i-- makes sure of this) meaning we've come to the end of the sequence
  // i--  -->  i=12    i=11    i=10    i=9    i=8    i=7    i=6

  for(let i=n; i>0; i--){
    // check if a num is evenly divisible meaning it has a remainder of zero
    // n % i  -> 12 % 12 = 0?  12 % 11 = 0?  12 % 10 = 0?… if so increment count, otherwise keep looping till i is no longer > 0.
    if(n % i == 0){
      count++
    }
  }
  // Finally when looping is done return count var
  return count;
}
getDivisorsCnt(12)    //6 -> 1, 2, 3, 4, 6, 12 notice from 4 skips to 6 cuz 5 is NOT a Factor of 12
getDivisorsCnt(5)    //2 -> 1, 5 cuz u cant use 2 to evenly divide into 5, u will get 2 with a remainder of 1
getDivisorsCnt(1)    //1
getDivisorsCnt(10)    //4
getDivisorsCnt(11)    //2
getDivisorsCnt(54)    //8

/*
const getDivisorsCnt=n=>[...Array(n).keys()].reduce((a,c)=>n%(c+1)?a:++a,0)

const getDivisorsCnt = (n) => Array(n + 1).fill(0).filter( (_, i) => n % i ===0 ).length

const getDivisorsCnt = n => [...Array(n + 1).keys()].filter(e => (n % e === 0)).length

*/