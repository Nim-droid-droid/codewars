/*
Remove the minimum
The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task

Given an array of integers, remove the smallest value. Do not mutate the original 
*/

// function removeSmallest(numbers) {
//   // Do not mutate the original -> so use Spread Operator (i guess its good practice to never mutate when writing functional code)

//   // return [...numbers].sort((a,b) => a-b).slice(1);

//     // ERROR: Wrong result for [5, 3, 2, 1, 4]: expected [ 2, 3, 4, 5 ] to deeply equal [ 5, 3, 2, 4 ]
//       // So return the order of the original arr, not sorted.
//         // but IDK how to reverse back to original order from sort() from this point so, i need to change my approach/logic

//   // // make a copy of the arr so i dont mutate original
//   //   // slice numbers arr from index 0 to the end & store in arrCopy
//   // const arrCopy = numbers.slice(0);

//   // // i can get the min value index without using sort(), instead use Math.min then getting its index in the arr using indexOf off
//   // // store the index of arr's min val
//   // const minVal = arrCopy.indexOf(Math.min(...numbers));

//   // // remove minVal from the original arr 
//   //   // splice(arr index, 0=add 1 or more=remove, item to add/remove)
//   // arrCopy.splice(minVal, 1)
//   // return arrCopy;



//   // filter method
//   // filter out min val from arr. To do that i need the index of min val
//     // return every el whos index is NOT equal to min val's index
//   // why not [] when spreading? Math.min([...numbers]) -> cuz numbers is already an arr, with [] itll be an arr within an arr
//   return numbers.filter((el, i) => i != numbers.indexOf(Math.min(...numbers)))
// }

// Replace el with throwaway variable since not using 
const removeSmallest = numbers => numbers.filter((_, i) => i != numbers.indexOf(Math.min(...numbers)))

removeSmallest([5, 3, 2, 1, 4])   //[5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
removeSmallest([1, 2, 3, 4, 5])   //[2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
removeSmallest([2, 2, 1, 2, 1])   //[2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
removeSmallest([])    //[], "Wrong result for []");