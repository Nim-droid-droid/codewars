/*
Vowel remover
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

// function shortcut (string) {
//   // replace(exp, CBF/replacement)
//   // Replace a, e, i, o, u with an empty string - so, remove vowel & replace with nothing
//   // [aeiou]    Character set: Match any characters in the set [set] in this case the set holds [a, e, i, o, u]
//   // +    Quantifier: Match one or more of the preceding token (proceeding token being a, e, i, o, u)
//   // /g   Global search: return the index of the last match, allowing iterative searches 
//   return string.replace(/[aeiou]+/g, '');
// }

const shortcut = string => string.replace(/[aeiou]/g, "");

doTest('hello')    //'hll'
doTest('how are you today?')    //'hw r y tdy?'
doTest('complain')    //'cmpln'
doTest('never')    //'nvr