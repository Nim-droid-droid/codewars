/*
Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.

Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// function solution(string) {
//   // split when come across a capital letter, then join in space in between
  
//   // methods i can use:

//   // map
//   // return [...string].map(el => el) NVM this way is too long


//   // regex
//   // (...)  Matches whatever is withing () and remembers the match, so in this case remember 'C' in 'camelCasing'
//   // ?= match without including it in the result (so i will match the capital letter but when i split @ Capital letter, capital letter will still be in the result)
//   // ?=[A-Z] split at this regex/any char within this [set] (a capital letter beyween A-Z). Then join with space in between 
//   return string.split(/(?=[A-Z])/).join(' ')
//   // ERROR without ?=
//     // Unexpected result: expected 'camel C asing' to equal 'camel Casing'
//     // ?= Positive lookahead. Matches a group after the main expression without including it in the result

//     // return string.split(/(?=[A-Z])/)
//     // ERROR withoout join()
//       // Unexpected result: expected [ 'camel', 'Casing' ] to equal 'camel Casing'

//     // return string.split(/([A-Z])/)
//     // ERROR withoout join() or ?=
//       // Unexpected result: expected [ 'camel', 'C', 'asing' ] to equal 'camel Casing'
    
//     // return string.split(/?=[A-Z]/).join(' ')
//     // ERROR with ()
//       // SyntaxError: Invalid regular expression: /?=[A-Z]/: Nothing to repeat at object


//   // filter
// }

const solution = string => string.split(/(?=[A-Z])/).join(' ')

solution('camelCasing')    //'camel Casing'
solution('camelCasingTest')    //'camel Casing Test'