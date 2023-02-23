/*
Count characters in your string
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {  
  // so keep track of num of times letter is repetead & store that val in obj, then return obj

  // const occurringCharsTracker = [...string].reduce((acc, letter) =>{
  
  return occurringCharsTracker = [...string].reduce((acc, letter) =>{

    // return acc[letter] = acc[letter] + 1 || 1, acc;

    // need to used prefix, so ++ increments & returns the value AFTER incrementing.
      // so we dont get {a: 1, b: 1} but { a: 2, b: 1 }
    return acc[letter] = acc[letter] ? ++acc[letter] : 1, acc;

    // retun acc obj from reduce() to occurringCharsTracker var
    // return acc;
  }, 
  {} );
  //  return occurringCharsTracker;
}
count("aba")    //{ a: 2, b: 1 }
count("")    //{}


/* 
const count = string =>
  [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});

  -~pre[val] -> pre[val] = val in pre ? ++pre[val] : 1;

  bitwise not / unary negation
  ~2 -> -3
  -~2 -> 3
  -~undefined -> 1


  const count = require('lodash').countBy;
  https://www.codewars.com/kata/52efefcbcdf57161d4000091/solutions/javascript 

 
  function count (string) {  
  return string.split('').reduce(function(o,v){ o[v] ? o[v]++ : (o[v] = 1); return o; }, {});
}
*/