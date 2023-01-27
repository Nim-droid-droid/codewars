/*
Title Case
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
Example

*/

function titleCase(title, minorWords) {
  // Arg 1: Split by word not letter then Grab the 1st char of each word & capitalise, lowercase the rest
  // return title[0].toUpperCase() + title.slice(1).toLowerCase() 
  
  // let word = title.split(' ') 
  // //lowercase the 1st letter of each word 
  // // then starting from the 2nd letter of each word lower case everything onwards
  // // join all the items/substring (words) in word arr with a space in between ->  'A Clash Of Kings'
  // return word.map(el => el[0].toUpperCase() + el.substring(1).toLowerCase() ).join(' ') //'A Clash Of Kings' need to lowercase 'of' 

  return title.toLowerCase().split(' ').map((word, index) => {
    return minorWords && minorWords.toLowerCase().split(' ').includes(word) && index !== 0 ? word :
      word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

/*
titleCase=(a,b='',c=a=>a.toLowerCase())=>a?c(a).split` `.map((a,d)=>d&&c(b).split` `.includes(a)?a:a[0].toUpperCase()+a.slice(1)).join` `:''

const titleCase = (title, minorWords = '') => {
  const cap = ([firstLetter, ...rest]) => firstLetter ? [firstLetter.toUpperCase(), ...rest.map(l => l.toLowerCase())].join('') : '';
  const minors = minorWords.split(' ').map(cap);
  const [firstWord, ...rest] = title.split(' ').map(cap);
  const result = [firstWord, ...rest.map(word => minors.includes(word) ? word.toLowerCase() : word)].join(' ');
  return result;
}
 
*/