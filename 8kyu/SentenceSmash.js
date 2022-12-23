/*
Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
smash(["hello"])  // "hello"
smash(["hello", "world"]) // "hello world"
smash(["hello", "amazing", "world"])  // "hello amazing world"
smash(["this", "is", "a", "really", "long", "sentence"])  // "this is a really long sentenc
*/

// function smash (words) {
  //   return words.join(' ')
  // };
  
const smash = words => words.join(' ')
smash(["hello", "world"]) // "hello world"