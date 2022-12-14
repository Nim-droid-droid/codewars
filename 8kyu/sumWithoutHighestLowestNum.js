/*
Sum without highest and lowest number
Task

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example

{ 6, 2, 1, 8, 10 } => 16  (6+2+8 =16)
{ 1, 1, 11, 2, 3 } => 6 (1+2+3= 6)
Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/
// let sum=0;
// function sumArray(array) {
//   if (array == null) {
//     return 0;
//   } else if (array.length < 2) {
//     return 0;
//   }else{
//     // sort into lowest to highest then exclude 1st & last elmnt from calulation
//     array.sort((a,b) => a-b).slice(1, array.length-1).map(el => sum+=el)
//   }
//   return sum;
// }
// Error not checking to see if array is empty or greater than 1


const sumArray = (array) => (
  // Check array insnt empty AND has more than 1 elmnt
  // if number of elmnts in array AND array length is greater than 1
  array && array.length > 1
    // then execute all after ?
    ? array
    // a - b so sort array elmnts in acending order
      .sort((a, b) => a - b)
      // instead of array.length-1 simple do -1 cuz slice is alread attached to it so n need for the long hand
      .slice(1, -1)
      // add the numbers in the array together & store in sum, then return the value of sum.
        // …, 0 -> initial value of sum is set to 0
      .reduce((sum, number) => sum + number, 0)
  // otherwise execute all after : so return 0
    : 0
);
sumArray([6, 2, 1, 8, 10])
sumArray([1, 1, 11, 2, 3])


