/*
Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
  //use regex to search through the str & filter, if it contains all 26 char from a-z at least once, return true
  
  // return string.match(/[A-Z]/gi).size >=26 ? true : false;

  // const newSet = [...new Set(string)].join('')
  // console.log(newSet) ->    The quickbrownfxjmpsvtlazydg
  //without join()
  // (28) ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'x', 'j', 'm', 'p', 's', 'v', 't', 'l', 'a', 'z', 'y', 'd', 'g']

  //   const newSet = [...new Set(string)].join('').size >= 26 ? true : false;    -> false Y?

  let s = string.toLowerCase();
  // split wherever there's no space so itll return Individual letters not words as el in the s arr
  s = s.split('').filter(el => {
    // have to do this & use toLowerCase 
      // test el against this regex
    // cant do /[a-z]/gi. - grab all alphabetical letters case insensitive 'a' or 'A'
    return /[a-z]/g.test(el);
  });
  s = s.join('');

  // Set Contain unique chars only e.g. there will not be 2 'o' in newSet Therefore if its size is 26 that means it contains the whole alphabet
  let newSet = new Set(s);
  return (newSet.size==26)
}
isPangram("The quick brown fox jumps over the lazy dog.")    //true
isPangram("This is not a pangram.")    //false