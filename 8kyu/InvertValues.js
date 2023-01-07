/*
Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
  // if el is less than 1 (so negative num) convert into positive num, otherwise (meaning el > 1) convert to negative num
  // return array.map( el => el < 1 ? Math.abs(el) : -Math.abs(el) );

  // 2 * -1 = -2
  // -2 * -1 = 2
  return array.map( el => el * -1 );
}
invert([1,2,3,4,5])
invert([1,-2,3,-4,5])