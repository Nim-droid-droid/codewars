/*
Unique In Order
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript 
*/

// tools that can be used: Set, filter()

// function uniqueInOrder(iterable){

//   // its case sensitive
//   // "preserving the original order of elements" need to use spread operator
//     // spread operator also gets it from 'AAAABBBCCDAABBB' to this ['A', 'B', 'C', 'D', 'A', 'B'] string to array of elmnts
//   const itersCopy = [...iterable];

//   // check curr elmnt is not equl to next elmnt
//   // filter out & retrun the elmnts that are not equal to the elmnt next to it
//   // if elmnt is not equl to the elmnt next to it (hence i+1) return it, otherwise dont retun it (so dont return the elmt that is the same as elmnt in [i]). Dont have to do !== ciz each char has a diff ASCII code hence case sensitive
//   return itersCopy.filter((el, i) => el != itersCopy[i+1])
// }

// didnt save argument to a varible 
const uniqueInOrder = iterable => [...iterable].filter((el, i) => el != iterable[i+1])
uniqueInOrder('AAAABBBCCDAABBB')


/*
// Set
function r(er){
  const ns = new Set([...er])
  return ns;
}
r('AAAABBBCCDAABBB')
// retuns Obj 
{'A', 'B', 'C', 'D'}

// Got Set to return array instead but codewar gave this ERROR: expected [ 'A', 'B', 'C', 'D' ] to deeply equal [ 'A', 'B', 'C', 'D', 'A', 'B' ]
function r(er){
  const ns = new Set([...er])
  return Array.from( ns);
}
r('AAAABBBCCDAABBB')
['A', 'B', 'C', 'D']

function uniqueInOrder(er){
  const c = [...er]
    const ns = new Set(c)
    return Array.from( ns);
}
uniqueInOrder('AAAABBBCCDAABBB')

Same ERROR as above
*/