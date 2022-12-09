/*
Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/


// function isIsogram(str){
//   //turn case insensitive
//   // split each time theres no space so by each letter
//   // sort according to each letters/character's Unicode code point value.
//   str2 = str.toLowerCase().split("").sort();
//   // compare i to the value of str2, so compare current letter to previous letter
//   // -1 because it starts at 0 but you want to only measure/loop within the array length 
//     // i:    0, 1, 2, 3, 4, 5
//     // iteration:    1  2  3  4  5  6
//     // Theres 5 item array/length of array is 5, but you've executed your loop 6 times - one times too many. So -1 fixes this. Is 5 < 5? no stop executing & return value, in this case boolean value false, when condition is met.
//   for(let i=0; i < str2.length-1; i++){
//     if(str2[i] == str2[i+1]) {
//       console.log(str2[i])
//       return false;
//     }
//   }
//   // WHY not put this in else{}? y does it keep returning true when put in else{return true;}?
//     // Cuz the for loop  only run one time because of the return statement (placement of your return statement is imortant). return will end the function.
//     // So either your condition passes, or fails, but the end result of either will break out of the loop and your function with your return statement. 
//     // So when you pass in "Mo0ose" it will check the condition of "M" == "o" then return
//   return true;
// }

// REFACTOR
function isIsogram(str){

  const str2 = str.toLowerCase();

  for(let i=0; i < str2.length; i++){
    if(str2[i] == str2[i+1]) {
      return false;
    }
  }

  return true;
}

isIsogram("moOse") //false
isIsogram("Dermatoglyphics") //true
isIsogram("isogram") //true
isIsogram("isIsogram") //false
isIsogram("") //true


/*


function isIsogram(str) {
  str = str.toLowerCase()
  
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i), i + 1) >= 0) {
      return false
    }
  }
  
  return true
}


*/