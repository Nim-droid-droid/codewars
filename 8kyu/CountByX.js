/*
Count by X
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

// function countBy(x, n) {
//   // return an array of the first n multiples of x

//   // i=0 will return 0 cuz 0*anything = 0
//   let z = [];
//   // for(let i=1; i<n+1; i++){
//   for(let i=1; i<=n; i++){
//     // with each loop push the elmnt * x to z array
//     z.push(i * x)
//     // 1 (i=1) * 1 (x) = 1
//     // 2 (i is now 2 cuz i++) * 1 = 2
//     // 2 (i is now 3 cuz i++) * 1 = 3 etc
//     // …
//     // 10 * 1 = 10 
//   }
//   // return z array
//   return z;
// }

const countBy = (x, n) => {
  let z = [];
  for(let i=1; i<=n; i++){
    z.push(i*x)
  }
  return z;
}
countBy(1,10)