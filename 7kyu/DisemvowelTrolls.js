/*
Disemvowel Trolls
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

//The vowels in English are a, e, i, o, u, and sometimes y

// function disemvowel(str) {
//   // I could put all the vowels in an array, then if found, replace them with no space using replace()
//   // The replace() method replaces only the first match. Also the replace() method is case sensitive.
//     // so ill have to use sply() indexOf() & join() if i pick the array path.
    
//   // Or use regex to replace all matches, use a regular expression with the /g flag set.
//   return str.replace(/([aeiou])+/gi, '');
// }

const disemvowel = str => str.replace(/([aeiou])+/gi, '');

disemvowel("This website is for losers LOL!")    //"Ths wbst s fr lsrs LL!"
disemvowel("No offense but,\nYour writing is among the worst I've ever read")    //"N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
disemvowel("What are you, a communist?")   //"Wht r y,  cmmnst?

/*
Array path
function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(el => {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
} 
*/