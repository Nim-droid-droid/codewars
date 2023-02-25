/*
Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

// function removeChar(str){
//   //slice off from index 1 (so 2nd el) to end of srt so length -1 (not included) 
//   return str.slice(1, str.length -1);
// };


// last el is -1 so no need to -1 from length
// const removeChar = str => str.slice(1, str.length -1);


// regEx
// replace the 1st & nth char with empty str/nothing.

// const removeChar = (str) => str.replace(/^\w|\w$/g, '')
  // match the characters in the string with whatever is inbetween here (/ /) & replace it via replace() method
  // ^  ->  Asserts the start of the string. 
  // \w  ->  is any word character, 
  // so it wont cover variants with non-word characters, e.g.: 4word
  // $  ->  Asserts the end of the string.
  
const removeChar = (str) => str.replace(/^.|.$/g, '');
  // match any char at the start of end of str with any characters except line breaks. Then replace with empty str/nothing.
    // ^  ->  Match the start of the string, or beginning of a multiple lines if multiline flag (m) is enabled. But i just need to cover 1 line hence only g flag.
    // .  ->  Dot: match any characters except line breaks.
    // |  ->  Alternation: Acts like boolean OR. Matches the expression before or after |
      // but in conjunction with the "g" flag it does both (change the first char AND the last).



removeChar('eloquent')   //'loquen'
removeChar('country')    //'ountr'
removeChar('person')   //'erso'
removeChar('place')    //'lac'
removeChar('ooopsss')    //'oopss'