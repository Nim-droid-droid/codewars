/*
String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending){
  // IF str == ending return true (no else{}) start checking from -1 index
  // i need to check the whole string (since im looking for more than 1 val) without returning so no loop

  // (slice backwards) start from end of str & go backwards at the length of ending.
    // so if ending is 'bc' thats a length of 2, slice of 2 chars from the end of str & then compare them to ending
    // return str.slice(-ending.length)=== ending ? true : false;


    // slice from index 0 - ending.length (so going backwards cuz if ending is bc' thats 2: 0-2 = -2) Do the last 2 char of str === ending?
    // return str.slice(0 - ending.length) === ending;


    // return true (by default) no need for ternary
    // return str.substr(-ending.length) === ending;



  // return true (by default) if str ends in ending (no need to return false since thats not asked in the challenge)
  return str.endsWith(ending);
}
solution('abc', 'bc') //true
solution('abcde', 'cde') //true
solution('abcde', 'abc') //false