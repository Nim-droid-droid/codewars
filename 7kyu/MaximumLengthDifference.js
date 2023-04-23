/*
Maximum Length Difference
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:

input : 2 strings with substrings separated by ,
output: number as a string
*/

const mxdiflg = (a1, a2) => {
  // let array = [];
  // if(a1.length && a2.length) {
  //   a1.forEach(str1 => a2.forEach(str2 => array.push(Math.abs(str1.length - str2.length))))
  //   return Math.max.apply(null, array);
  // } 
  // return -1;

  // handle corner case 1st
  let max = -1;
  for(let i of a1)
    for(let j of a2)
      max = Math.max(max, Math.abs(i.length - j.length));
      
  return max;
}