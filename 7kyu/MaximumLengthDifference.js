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
  // if(a1.length ==0 || a2.length === 0)
  // * cuz if any of multiplicator would be 0, the whole result will be zero.
  if(a1.length * a2.length === 0) return -1;

  const smallestA1 = Math.min(...a1.map(el => el.length));
  const smallestA2 = Math.min(...a2.map(el => el.length));

  const largestA1 = Math.max(...a1.map(el => el.length));
  const largestA2 = Math.max(...a2.map(el => el.length));

  const diffA1 = Math.abs(smallestA1 - largestA2);
  const diffA2 = Math.abs(largestA1 - smallestA2);
  return diffA1 > diffA2 ? diffA1 : diffA2




  // let array = [];
  // if(a1.length && a2.length) {
  //   a1.forEach(str1 => a2.forEach(str2 => array.push(Math.abs(str1.length - str2.length))))
  //   return Math.max.apply(null, array);
  // } 
  // return -1;


/*
  // handle edge case 1st
  let max = -1;
  for(let i of a1)
    for(let j of a2)
    // Math.abs() always return a positive num or 0
    // reassign/return the max value between max(which is -1) & the absolute val of abs(i.length - j.length) so either a positive num or 0, even 5-20=15 instead of -15 cuz of abs() 
      // so is max (-1) > than Math.abs(i.length - j.length) (in this case lets say the calcultd val is 15)? No, return the calculation & reassign max var val (which is initially -1)
      // Math.abs(i.length - j.length)=0 return -1 (which is initially val of max)
      max = Math.max(max, Math.abs(i.length - j.length));
      
  // then return max val
  return max;
*/
}
mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"])  //13