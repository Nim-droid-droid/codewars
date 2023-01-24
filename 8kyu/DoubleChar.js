/*
Double Char
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

// function doubleChar(str) {
//   // return str.split('').map(el => el.repeat(2)).join('')
// whenever using split() trade it for spread operator 
//   return [...str].map(el => el.repeat(2)).join('')
// }

const doubleChar = str =>[...str].map(el => el.repeat(2)).join('')

/*
Using regex 
const doubleChar = str =>
  str.replace(/./g, `$&$&`);

const doubleChar = str => str.replace(/(.)/g, '$1$1');

*/

/*
whenever using split() trade it for spread operator 
function doubleChar(str) {
  return [...str].map(x => x.concat(x)).join("");
}

const doubleChar = str => [...str].map(i => i + i).join('')

*/

doubleChar("abcd")    //"aabbccdd"
doubleChar("Adidas")    //"AAddiiddaass"
doubleChar("1337")    //"11333377"
doubleChar("illuminati")    //"iilllluummiinnaattii"
doubleChar("123456")    //"112233445566"
doubleChar("%^&*(")   //"%%^^&&**(( 