/*
Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
  // const wordCopy = [...word]


  
  // i need to count & store how many times a char appeared (for this use for loop or reduce())
  // if char doesnt repeat leave its val as 1 otherwise increment
  // since im assigning vals to diff chars its best to use an obj to map those chars (key) to their val
  // ")" if that character appears more than once
  // "(" if that character appears ONLY once
  // Ignore capitalization so toLowerCase()
  // it keeps menitoning original string so guess i should use ... to preserve original string
  


  // took out sort cuz its too much work to put it back to origin ordr & print it

  // if i sort it i can check repeated char by doing el/i == i+1
    // [...word].sort()    ->    ['S', 'c', 'c', 'e', 's', 's', 'u'] WHY use split() if sort() already does this?
      // cuz sort() splits str in an order. split() splits str in the origin str order.
    // return [...word].toLowerCase().split('').sort().join()

    // [...word].sort().join()    ->    'S,c,c,e,s,s,u' join() takes it out of the arr & joins as a string
    
  
  // filter out all the matching consecutive els OR use map since i have to apply a diff function depending on if el & el+1 match or not OR reduce since i want the accumulated arr of '(' & ')' (in 1 stirng)
  // ...word.toLowerCase().split('')    ->    ['s', 'u', 'c', 'c', 'e', 's', 's']
  // return [...word.toLowerCase().split('')].map().join()


  
  const wordCopy = [...word.toLowerCase()].reduce((acc, char) => {
    // if this char/el im currently looping through using reduce (i know what char to look for in the obj cuz im using it as the key) is alread in the acc obj 
      // acc[char] +1    ->    if it is; increment its val by 1. e.g. c is already in acc obt so its val goes from 1 to 2
      // OR if char is NOT in acc obj, set its val to 1.
    acc[char] = acc[char] + 1 || 1;
    // then return acc obj to wordCopy variable
    // since im keeping track of more than 1 val im using an obj
    return acc;
  }, 
  // store the char val (so the amount of times they're repeated thats saves as a val in this acc obj. Initially obj is empty)
  {} );
  // index into each el inside wordCopy & check if that el's val is 1, if so return '(' if that el's val in NOT 1 then return ')'. join joins it into 1 string literal (cuz `` instead of '') & returns it. so all of the vals from wordCopy get returned in 1 string.
  return [...word.toLowerCase()].map(e => wordCopy[e] == 1 ? '(' : ')').join``//works exactly as join('') but save 2 characters 
}
duplicateEncode("Success")
duplicateEncode("recede")


/*
Other attempts:

const duplicateEncode = s => s
  .toLowerCase()
  .split``
  .map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
  .join``;


  const duplicateEncode = w => w.replace(/./g, c => (new RegExp(`([${c}]).*\\1`, 'gi')).test(w) ? ')' : '(');


const uniq = (str, chr) => str.indexOf(chr) === str.lastIndexOf(chr);
const encodeDuplicate = str => [...str].map(chr => uniq(str.toLowerCase(), chr)? "(" :")").join``; 


function duplicateEncode(word){
  return word.toLowerCase().split('').map(letter => {
    if (word.toLowerCase().split('').filter(l => l === letter).length > 1) {
      return ')';
    }
    return '(';
  }).join('')
}


function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

function duplicateEncode(word) {
  var letters = word.toLowerCase().split('')
  return letters.map(function(c, i) {
    return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
  }).join('')
}
*/