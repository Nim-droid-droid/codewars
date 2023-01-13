/*
Beginner Series #3 Sum of Numbers
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

function getSum(a, b)
{
    
//If the two numbers are equal return a or b
  // if(a === b){
  //   return a;
  // }else{
  // // loop through the beginning to end of a/b.
  //   // But how am i going to get the sum of all the integers between a & b and including a & b?
  //     //Math.min()/max()
    
  //   // let sum=0;
  //   // // whether a or b has the smallest num itll be stored in min variable
  //   //   const min = Math.min(a, b);
  //   //   const max = Math.max(a, b)

  //  for(let i=min; i<=max; i++){
  //   sum+=i
  //  }
  //      return sum;
  //     }

  //REFACTOR
      let sum=0;
      // whether a or b has the smallest num itll be stored in min variable
      const min = Math.min(a, b);
      const max = Math.max(a, b)
      // <= incase min & max are the same value
      for(let i=min; i<=max; i++){
        sum += i;
      }
      return a === b ? a : sum;
}
getSum(-1, 2)    //2
getSum(1, 2)    //3