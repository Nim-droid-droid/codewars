/*
Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
  //slice off from index 1 (so 2nd el) to end of srt so length -1 (not included) 
  return str.slice(1, str.length -1);
};

// last el is -1 so no need to -1 from length
const removeChar = str => str.slice(1, str.length -1);
removeChar('eloquent')   //'loquen'
removeChar('country')    //'ountr'
removeChar('person')   //'erso'
removeChar('place')    //'lac'
removeChar('ooopsss')    //'oopss'