/*
Removing Elements
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){
  //your code here
  return arr.filter(function(elm, index) {
    // if index is divisible by 2 with 0 remiander 
      // meaning we're on an odd number which is the number of every 2nd elmnt 2, 4, 6, 8... which it what i want to remove
    return index % 2 === 0;
  });
}
                // 1,       2,      3,        4,        5
removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])