/*
Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

// function descendingOrder(n){
//   // Cant use str methods on n cuz n is int not str
//   // return n.split('').sort((a,b)=>  b-a);    
//   // return Number( String(n).split('').sort((a,b) => b-a). join('') );

//   // b-a to return digits in descending order.
//   // Without join: ['2', '1', '1', '0']    With join: 2110
//   return +String(n).split('').sort((a,b) => b-a).join('');
// }

// const descendingOrder = n => +String(n).split('').sort((a,b) => b-a).join('');

// instead of using String() to turn n into a str use + ""
const descendingOrder = n => +(n + '').split('').sort((a,b) => b-a).join('');

descendingOrder(1021)
descendingOrder(1021)   //2110
descendingOrder(0)    //0
descendingOrder(1)    //1
descendingOrder(111)    //111
descendingOrder(15)   //51
descendingOrder(123456789)    //987654321