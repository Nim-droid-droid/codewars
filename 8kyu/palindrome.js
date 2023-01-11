/*
Is it a palindrome?
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

// function isPalindrome(x) {
//   // your code here
//   const copyX = x.toLowerCase().split('').reverse().join('');
//  return copyX == x.toLowerCase() ? true: false; 
// }

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') === x.toLowerCase() ? true: false;

isPalindrome("Abba")  // true
isPalindrome("hello")  // false
isPalindrome("AbBa")  // true 