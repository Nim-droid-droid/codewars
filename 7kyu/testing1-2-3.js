/*
Testing 1-2-3
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// Destructuring & entries()

function number(array){
  //your awesome code here
  return array.map((el ,i) => {
    return (++i) + ':' + el;
  });
  // WRONG
  // entries() turns each el into its own array. i want to return an array with index starting at 1
  // if(array.length === 0){
  //   return array
  // }else{
  // for(const [i, el] of array.entries()){
  //   line += `${i + 1}: ${el} `;
    
  // }
  //    console.log(line)
  // }
}
number(["a", "b", "c"])
number([])



// var number=function(array){
//   //your awesome code here
// }