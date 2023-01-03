/*
Array.diff
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

// function arrayDiff(a, b) {
//   // return a.remove(b)

//   // return a.map(el => el == b ? a.pop(el) : a)
//   // ERROR: a was [1,2], b was [1]: expected [ 2, undefined ] to deeply equal [ 2 ]

//   // return a.filter(el => el == b )
//   // ERROR: a was [1,2], b was [1]: expected [ 1 ] to deeply equal [ 2 ]
//   // im not including a in return, How do i return filtered a? includes()

//   // Loop throuh each el in a arr & if b does NOT (!) include el (el is the current el in a arr being looped through), filter it & return that (so filter/return the a el not in b arr)
//   return a.filter(el => !b.includes(el))
// }

// filter out val present in b using filter
// Loop throuh each el in a arr & 
  // if b does NOT (!) include/have that el (el is the current el in a arr being looped through), filter out that el & return it (so filter/return the a el not in b arr)
  // so subtract b rrfrom a arr
const arrayDiff = (a, b) => a.filter(el => !b.includes(el))

arrayDiff([1,2],[1])  //[2] b does not have the el 2, so its filtered out & returned.
arrayDiff([1,2,2,2,3],[2])  //[1,3]
arrayDiff([1,2,2], [1])  //[2,2]         "a was [1,2,2], b was [1]");
arrayDiff([1,2,2], [2])  //[1]         "a was [1,2,2], b was [2]");
arrayDiff([1,2,2], [])   //[1,2,2]         "a was [1,2,2], b was []");
arrayDiff([], [1,2])   //[]        "a was [], b was [1,2]");
arrayDiff([1,2,3], [1,2])  //[3]