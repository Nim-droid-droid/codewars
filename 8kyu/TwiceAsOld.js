/*
Twice as old

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/


// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   /*
//   // multiply sonYearsOld by 2, then subtract that from dadYearsOld & return result
//   // if its < 0, convert to its positive version using Math.abs(-5)= 5 
//     // or Multiplying the Negative Number with -1     num * -1
//     // or Use the Bitwise Not (~) operator to convert the signed number to an unsigned number.  ~(-5)=4 so it has to be ~(-5) +1 =5
  
//   const sonYears = sonYearsOld*2;
//   const diff = dadYearsOld - sonYears;
//   return diff < 0 ? Math.abs(diff): diff;
//                 //? ~(diff) +1: diff;
//                 //? diff * -1: diff;
//   */
//    return Math.abs(dadYearsOld - sonYearsOld * 2)
// }

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - sonYearsOld * 2);

twiceAsOld(36,7)    //22  7*2=14  36-14=22
twiceAsOld(55,30)   //5   30*3=60  55-60=-5    60-55= 5
twiceAsOld(42,21)   //0  21*2=42  42-42=0
twiceAsOld(22,1)    //20
twiceAsOld(29,0)    //29