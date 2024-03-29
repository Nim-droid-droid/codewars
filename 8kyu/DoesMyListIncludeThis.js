/*
Enumerable Magic - Does My List Include This?
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/

// function include(arr, item){
//   // ...
// }
// const include = (arr, item) => arr.includes(item)


// if index of item (so item is found in arr) so does NOT = -1 (meaning item is present in arr) return true (otherwise return false).
// const include = (arr, item) => arr.indexOf(item) !== -1;

// const include = (a, i) => a.indexOf(i) > -1;

// const include = (arr, item) => Boolean(~arr.indexOf(item));

// test to see if some (at least one element) in the arr array is === item
const include =(arr, item) => arr.some(num => num === item);

include([1,2,3,4], 3)  // true 
include([1,2,4,5], 3)  // false
include([], 3)  // false