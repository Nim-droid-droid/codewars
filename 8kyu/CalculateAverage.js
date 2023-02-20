/*
Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// function findAverage(array) {
//   // add up all the nums/el in arr, then divide by arrs length
  
//   // return array.reduce((acc, el) => Math.ceil((el + el)/array.length), 0);
//   // add up all the nums/el in arr, then divide by arrs length
  
//   if(array.length === 0){return 0;}
//   // return array.reduce((acc, el) => Math.ceil((el + el)/array.length), 0);
 
//   // const getSum = array.reduce((sum, el) =>  sum + el,0)
//   // return getSum/array.length;

//   const getSum = (array.reduce((sum, el) =>  sum + el, 0) )/array.length
//   return getSum;
// }

const findAverage = array => array.length === 0 ? 0 : array.reduce((acc, el)=> acc + el, 0)/array.length ;

findAverage([1,1,1])    //1
findAverage([1,2,3])    //2
findAverage([1,2,3,4])    //2.5