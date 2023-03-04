/*
Fix string case

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!
*/

/*
function solve(s){
    //get the length of ppercase chars, check if the num of uppercase chars >= 1/2 length of str, if so return uppercase. otherwise return str
    // use split() then filter out uppercase chars see if its >= to 1/2 length of str, if so return uppercase. otherwise return str
    // use regex to match A-Z, return length, then replace str with all cap if >= str.length/2

  // if(s.match(/[A-Z]/g).length >= s.length/2){
  //   return s.toUpperCase()
  // }else{
  //   return s.toLowerCase()
  // }
  // ERROR: Uncaught TypeError: Cannot read properties of null (reading 'length')
  
  // if(s.match(/[A-Z]/g).length <= s.length/2){
  //   return s.toLowerCase()
  // }else{
  //   return s.toUpperCase()
  // }
  // ERROR: Uncaught TypeError: Cannot read properties of null (reading 'length')
    // need to store it in a var


  // let upper = s.split('').filter(el => el.match(/[A-Z]/g)).length
  // let lower = s.split('').filter(el => el.match(/[a-z]/g)).length
  // return upper > lower ? s.toUpperCase(): s.toLowerCase();

  return s.split('').filter(el => el.match(/[A-Z]/g)).length > s.split('').filter(el => el.match(/[a-z]/g)).length ? s.toUpperCase(): s.toLowerCase();
}
*/

const solve = s => s.split('').filter(el => el.match(/[A-Z]/g)).length > s.split('').filter(el => el.match(/[a-z]/g)).length ? s.toUpperCase(): s.toLowerCase();

solve("code")    //"code"
solve("CODe")    //"CODE"
solve("COde")    //"code"
solve("Code")    //"code"