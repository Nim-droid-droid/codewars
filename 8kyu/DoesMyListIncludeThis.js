/*
Enumerable Magic - Does My List Include This?
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/

// function include(arr, item){
//   // ...
// }
const include = (arr, item) => arr.includes(item)

include([1,2,3,4], 3)  // true 
include([1,2,4,5], 3)  // false
include([], 3)  // false