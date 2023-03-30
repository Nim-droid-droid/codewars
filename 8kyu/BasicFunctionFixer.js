/*
Grasshopper - Basic Function Fixer

Fix the function

I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?
*/

/*
function addFive(num) {
  var total = num + 5
  return num
}
*/

// function addFive(num) {
//   var total = num + 5
//   return total
// }

const addFive = num => num + 5;

addFive(5)    //10
addFive(0)    //5
addFive(-5)    //0