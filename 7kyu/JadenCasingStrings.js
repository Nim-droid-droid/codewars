/*
Jaden Casing Strings
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

// function toJadenCase(str) {
//   // split(' ')...el[0].toUppercase() -> without the space in split() all the elements in the arr (& not just the 1st) will be uppercased
//   return str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
// };
// toJadenCase("How can mirrors be real if our eyes aren't real") //"How Can Mirrors Be Real If Our Eyes Aren't Real"


// var str = "How can mirrors be real if our eyes aren't real";
// String.prototype.toJadenCase = function () {
//   return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
// };
// str.toJadenCase()  //"How Can Mirrors Be Real If Our Eyes Aren't Real" 


var str = "How can mirrors be real if our eyes aren't real";
String.prototype.toJadenCase = function () {
  // ( ) -> Capture in group group multiple tokens together and create Capture group for extracting substring
  // ^ -> Beginning matches the beginning of a string or line

  // | Alternation acts like a bull in or much is the expression before or after |
  // [ ] Character set ->  match any character in this set (so all lower cases)
    // so capture space before any a-z chars, & capture that 1st lowrcase letter of each word & using a CBF replace/turn it into an upper case.
  
  return this.replace(/(^|\s)[a-z]/g, letterAfterSpace => letterAfterSpace.toUpperCase());
};
str.toJadenCase()  //"How Can Mirrors Be Real If Our Eyes Aren't Real" 