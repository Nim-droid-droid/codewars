/*
Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/


// function XO(str) {
//   // compare length/val of 'x' to 'o' if its the same return true.

//   // filter
//   // split str els into individual els & place inside arr

//   // cant use toLowerCase() with ... cuz its a str method & ... converts things to arr
//   // const array = [...str].toLowerCase();
//   const arr = str.toLowerCase().split('');

//   // since i only need to look for true val i only need to use return
//   // filter out 'x' from arr array & return its length (the num of 'x's there are inside arr)
//     // so if theres 3 'x' its return length/int 3
//   // do the same for 'o' inside arr array
//   // then compare their lengths
//   return arr.filter(el => el == 'x').length == arr.filter(el => el == 'o').length;

//   // I wanted to do a one-liner, but this isn't very readable
//   // return str.toLowerCase().split('').filter(el => el == 'x').length == str.toLowerCase().split('').filter(el => el == 'o');length;
//   // OR
//   // return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;

// }

// cant do get ERROR: expected false to equal true
// const XO = str => str.toLowerCase().split('').filter(el => el == 'x').length == str.toLowerCase().split('').filter(el => el == 'o');

const XO = str => {
  arr = str.toLowerCase().split('');
  return arr.filter(x => x === 'x').length === arr.filter(x => x === 'o').length;
}

XO("xxOo")    //true);
XO('xo')    //true);
XO("xxxm")    //false);
XO("Oo")    //false);
XO("ooom")    //false);