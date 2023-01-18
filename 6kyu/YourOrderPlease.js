/*
Your order, please
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

// function order(words){
//   // Loop str - split() str so i can loop through & check eact el of the word, 
//   // find the number (use regex since its specific search), 
//   // then sort() according to that number in Ascending order. 
//   // Then join() all words back together.
  

//   // If the input string is empty, return an empty string.
//     // Didnt have to do this cuz i used regex?

//   // split @ space so each el is a whole word & not letters, so we can order/sort the word instead of letters
//   // remeber sort() works like this, if the calculation of a - b is:
//     // 1. < 0 … a comes first
//     // 2. 0 … nothing will be changed
//     // 3. > 0 … b comes first
//   // match() method retrieves the Matches a string against a regex (\d means check str for digits), then the function compares it in UTF code to compare, e.g. a=4 b=3 4-3=1 1 is > 0 so b comes first -> 3, 4
//   // join() all the el (in this case words) together with space in between
//   return words.split(' ').sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(' ')
// }

/**
let digit = /\d/;

const order = words => words.split(' ').sort((a,b) => a.match(digit) - b.match(digit)).join(' ')
*/


const order = words => words.split(' ').sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(' ');

order("is2 Thi1s T4est 3a")  //"Thi1s is2 3a T4est"
order("4of Fo1r pe6ople g3ood th5e the2")  //"Fo1r the2 g3ood 4of th5e pe6ople"
order("")  //""    "empty input should return empty string" 