/*
Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

function replace(s){
  //replace() regex
  // regex [] -> Character set: match any character in the set
  // regex () -> Capture group: groups multiple tokens together and create a group for extracting the substrate was using a back reference
    // so this captures a group, not individual chars like [], hence y Case insensitive (i) flag wasn't working
  return s.replace(/[aeiou]/gi, "!");
}

const replace = s => s.replace(/[aeiou]/gi, "!");
replace("Hi!")    //"H!!"
replace("!Hi! Hi!")    //"!H!! H!!"
replace("aeiou")    //"!!!!!"
replace("ABCDE")    //"!BCD!"