/*
Find the odd int
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
  // store els in an obj
    // grab the el that has an odd number val
      // if the key val is divisible by 2 with no remainder its an even num otherwise its ODD num
  
  // return A.filter(el => el%2)
    // ERROR: Incorrect answer for input=[7]: expected [ 7 ] to equal 7



  // const find_Odd = [...A].reduce((acc, el) => {
  const find_Odd = A.reduce((acc, el) => {
    // if el already exists in obj) Increment it's val by 1, otherwise - meaning el does not exist in obj, set its val to 1 
    acc[el] = acc[el] + 1 || 1;
    // return acc obj from this function to find_Odd var
    return acc;
  }, 
  {} );

  // Now loop through find_Odd object to find the el with the odd val & return it

  // return find_Odd.filter(el => find_Odd[el] % 2 )
  // return [...find_Odd].filter(el => find_Odd[el] % 2 )
    // ERROR: find_Odd.filter is not a function

  // return Object.values(find_Odd).filter(el => el % 2 )
    // ERROR: Incorrect answer for input=[7]: expected [] to equal 7
      // y is it returning an empty arr isntead of el key with odd val?

  // Grab all the keys from the find_Odd object 
  // then find the key whose value is odd 
  // the convert that key from str to a number using Number() & then return that number
    // Number() obj cuz object keys are str data types so this needs to be converted since I want the key returned as a num
  // return Number(Object.keys(find_Odd).find(key => find_Odd[key] % 2 === 1));
  // return +Object.keys(find_Odd).find(key => find_Odd[key] % 2 === 1);
  return +Object.keys(find_Odd).find(key => find_Odd[key] % 2);
}

/**
Other solutions:

****** 
// XOR (^) Operator Not exponent
Have long notes on tablet, need to condense then add here

XOR Truth table
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
*****



function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

const findOdd = (A) => A.sort((a, b) => a - b).reduce((a, b) => b - a);


findOdd=a=>[...new Set(a)].find(e=>a.filter(c=>c==e).length%2)


function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

function findOdd(arr) {
  let count = {};
  arr.map(num => count[num] ? count[num] += 1 : count[num] = 1);
  return +(Object.keys(count).filter(num => count[num] % 2 !== 0).join(''));
}

// Cool one liner using ES6
const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);

function findOdd(A) {
  return A.find((number) => A.filter((n) => number === n).length % 2)
}

const findOdd = arr => arr.reduce(
  (pv, cv) => arr.filter(inv => inv === cv).length % 2 === 1 ? cv : pv);

function findOdd(A) {
  return A.reduce((l, r) => l ^ r);
}

function findOdd(A) {
 	A.sort();
  if(A[0] !== A[1]) return A[0]
  else{
    A.splice(0,2)
  }
  return findOdd(A)
}

function findOdd(A) {
  var x = 0;
  for (var i = 0; i < A.length; i++) {
    x = x ^ A[i];
  }
  return x;
}

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
*/

findOdd([7])   // 7
findOdd([0])   // 0
findOdd([1,1,2])   // 2
findOdd([0,1,0,1,0])   // 0
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])   //4