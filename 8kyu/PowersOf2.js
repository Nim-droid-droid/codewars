/*
Powers of 2
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

function powersOfTwo(n){
  // return n.map(el => )

  // SO I need to start with zero, then increment it by 1 at each loop/index, each index needs to be raised to the power of 2.
  // Each array has a number of n+1 elements 
  // return [...Array(n+1)].fill(0).map((el, i) => {
  //     i + 1
  //     return Math.pow(el, 2) 
  //         })


  // let arr=[]
  // for(let i=0; i<=n; i++){
  //   // at each index of arr store te val of i to the power of 2
  //   arr[i] = Math.pow(i, 2)
  // }
  // return arr

  // Instead of using map() use from() that as a 2nd arg takes in a map()
  // return Array.from({length: n+1}, (el, i) => Math.pow(i, 2));
                                      //      => i**2
  // ERROR
  // expected [ +0 ] to deeply equal [ 1 ]
  // Solution 
    // Instead of: i**2 do: 2**i 
    // WHY? cuz u Want to take 2 to the power of i, not the other way round, i to the power of 2    -> [2^0, 2^1, 2^2]

  // Create a new away from the length of N + 1 
  // since I'm not using el para swap it for a throwaway variable 
  // with each iteration/loop, raise 2 to the power of i 
  return Array.from({length: n+1}, (_, i) => Math.pow(2,i));
}
powersOfTwo(1)    //[1, 2]    [2^0, 2^1]
powersOfTwo(0)    //[1]     [2^0]
powersOfTwo(4)   //[1, 2, 4, 8, 16]
