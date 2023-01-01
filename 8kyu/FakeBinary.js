/*
Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

// function fakeBin(x){
//   return x.split('').map(el => el < 5 ? '0': 1).join('')
  
//   // this works too:
//   // return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// }

const fakeBin = x => x.split('').map(el => el < 5 ? '0': 1).join('')
fakeBin('45385593107843568') //'01011110001100111');
fakeBin('509321967506747') //'101000111101101'); 
fakeBin('366058562030849490134388085') //'011011110000101010000011011'