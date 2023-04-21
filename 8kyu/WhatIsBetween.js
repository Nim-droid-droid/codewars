/*
What is between?
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

// function between(a, b) {
//   // loop & increment i till it reaches b, while adding up
//   let sum=[];
//   for(let i=a; i<=b; i++){
//     sum.push(i)
//   }
//   return sum;
// }



function between(a, b) {
  // create an new Array
  // b-a+1 / 4-1+1=4  ->  from/with the length of 4, so space for 4 items (initially their val is undefined, so 4 undefined items in new arr)
  // (_,i)=>i+a  ->  apply this CBF on the new Arr before returning/storing it in arr var
    // i (0) + a (1) =1    1st loop 
    // i (1) + a (1) =2
    // i (2) + a (1) =3
    // i (3) + a (1) =4    4th loop
  // let arr = Array.from({length:(b-a+1)},(_,i)=>i+a);
  // return arr;

    // return Array.from({ length: b - a + 1 }, () => a++)

    // [-2, -1, 0, 1, 2]
    // Array(b - a + 1)  ->  [empty × 5]  Array obj returns an arr with 5 slots
    // fill(1)  ->  [1, 1, 1, 1, 1]   fills those 5 slots with val of 1
    // map(el => a++)   ->  map loops through each el (a) & increment by 1
      // -2
      // -2 + 1 = -1  1st loop
      // -1 + 1 = 0 ...
    return Array(b - a + 1).fill(1).map(el => a++);
  
}

between(1, 4)    //[1, 2, 3, 4]
between(-2, 2)    //[-2, -1, 0, 1, 2]