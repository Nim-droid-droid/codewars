/*
Find the next perfect square!
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   // so im looking for the next sqr num. If sq is NOT an integer (so decimal or fraction NOT whole number) return -1
      
//   let num, nextNum;

//   // if the sqr root of sq has a remainder; so sq divided by 1 has a remainder, that means its NOT an integer so return -1
//   // Why not sq % 1 === 1? Because by default this returns true so no need for 1 or other nums above 0
//   if(Math.sqrt(sq) %1){
//     return -1
//   }
//   // else so: sq % 1===0 0/no remainder means its an integer
//   else{
//     // Math.sqrt(121) -> 11 (11*11 = 121)
//     // 11 + 1 =12 (12*12 = 144)
//     num=Math.sqrt(sq)
//     // Has to be incremented before it's stored (so it not 11 but 12) hence the prefix ++
//     nextNum = ++num
//   }
// return Math.pow(nextNum,2)//nextNum * nextNum
// }


// AF version
                                                // : Math.pow(Math.sqrt(sq)+1, 2)
const findNextSquare = sq => Math.sqrt(sq) %1 ? -1 : (Math.sqrt(sq)+1) ** 2;