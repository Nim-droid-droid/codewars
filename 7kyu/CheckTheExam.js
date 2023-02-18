/*
Check the exam
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

// function checkExam(array1, array2) {
//   // so if el in array1 == the el in the same index but in array2 increment by 4, if != decrement by 1, otherwise +0 for each blank answer (empty str)
//     // notice theres no negative returns so if < 0, return 0.
  
//   //loop through arr1 & compare each element to arr2, increment/decrement 
//   let result;
//   // for(let i=0; i < array1.length; i++){
//   //   if(array1[i] == array2[i]){
//   //      result =+ 4;
//   //   }else{
//   //      result =- 1;
//   //   }
//   // }
//   // return result < 0 ? 0 : result;
//     // ERROR: expected 6 to equal 7
//     // This code works for all test cases  EXCEPT the one returning 7 but IDK why
//       // That's because I'm not accounting for the empty element thats only in that arr2

//   for(let i=0; i < array1.length; i++){
//     if(array1[i] === array2[i]){
//       result += 4;
//     }else if(array2[i] === ""){
//       result -= 0;
//     }else{
//       result -= 1;
//     }
//   }
//   return result < 0 ?  result = 0 :   result;


//   // reduce() version
//   // return array1.reduce((result, el, i) => {array1[i] == array2[i] ? result =+ 4 : })
// }

checkExam = (array1, array2) => (array1 = array2.reduce((result, el, i) => result + (el === array1[i] ? 4 : el === '' ? 0 : -1), 0)) < 0 ? 0 : array1;

checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])    //7
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])    //6
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])    //16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])    //0