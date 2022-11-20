/*
Shortest Word
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript 
*/
// PREP
// E & P
// split words in string into individual items/words
// loop thorugh them & return min

function findShort(s){
  // Spread out & get all values in s
  // everytime a space is found, split it into its own item in the array 
    //'The quick brown' thats now 3 items in the shortestWord array instead of 1 string
  // loop through each elmt using map & retrieve the length
    // but i want the shortest so use min()
  const shortestWord = Math.min(
    ...s.split(' ')
    .map(x => x.length)
    );
  return shortestWord;
}
findShort('The quick brown') //3
findShort('The quick brown fox jumps over the lazy dog.') //3. An array of 9 items