/*
Anagram Detection
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples

"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript 
*/
// function isAnagram(test, original) {
//   // return true if the two arguments are anagrams of each other; return false otherwise.
//   // for both arguments:
//     // anagrams are case insensitive - so lowerCase() parameters
//     // split each letter of the word, the sort them in order, then join back & compare
//   const test2 = test.toLowerCase().split('').sort().join('')
//   const original2 = original.toLowerCase().split('').sort().join('')

//   return test2 === original2 ? true: false;

// };
// isAnagram('Buckethead', "DeathCubeK")

//refactor
// function isAnagram (test, original) {
// 	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
// }

//refactor
const isAnagram = (test, original) => test.toLowerCase().split('').sort().join() === original.toLowerCase().split('').sort().join();
isAnagram('Buckethead', "DeathCubeK")

//refactor
// map() reduce()
// const isAnagram = (test, original) => [test, original].map(el=> el.toLowerCase``.split``.sort``.join``).reduce((test,original)=> test===original)
// isAnagram('Buckethead', "DeathCubeK")
