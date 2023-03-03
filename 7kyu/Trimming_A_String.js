/*
Trimming a string

Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

These dots at the end also add to the string length.

For example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H...", because 1 <= 3

Requested maximum length will be greater than 0. Input string will not be empty.
*/


// function trim(str, size) {
// // // use the zise as an index into str, slice of from there
// //   if (str.length > size){
// //       // return str.replace(str, size + '...')
// //       // slice() starts at index 1
// //       const dots = str.slice(size);
// //       return str.replace(dots, "...")
// //       // returns this    'Creating kata ...'
// //     }else{
// //       //<=
// //     return str
// // }

//   // if ( str.length <= size ) {
//   //   return str;
//   // }

//   // const real = str.slice(0, size);

//   // return `${real.length < 4 ? real : real.slice(0, -3)}...`;
//   // }
  
// //  return str.length > size ? str.slice(0, str.length<3 ? size : size - 3) + "..." : str;
//   // didnt pass all test case
//   // ERROR: 
//   // expected 'PwH...' to equal 'P...'
//   // expected 'Creating kata is fu...' to equal 'Cr...'

//   // return str.length > size ? str.slice(0, size <= 3 ? size : size - 3) + '...' : str;

//   // return str.length > size ? `${str.slice(0, str.length<=3 ? size : size - 3)}...` : str;
  
//   return str.length > size ? str.substring(0, (size > 3 ? size - 3 : size)) + "..." : str
// }

const trim = (str, size) => str.length > size ? `${str.substring(0, (size > 3 ? size - 3 : size))}...` : str;

                    //so the ... doesn't make the str length == size. Its just the last 3 els are ...
trim("Creating kata is fun", 14)    //"Creating ka..."
trim("He", 1)    //"H..."
trim("Code Wars is pretty rad", 50)    //"Code Wars is pretty rad"