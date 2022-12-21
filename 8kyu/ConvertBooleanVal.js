/*
Convert boolean values to strings 'Yes' or 'No'.
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

// function boolToWord( bool ){
//   return bool == true ? "Yes": "No";
// }

const boolToWord = bool => bool == true ? "Yes": "No";
boolToWord( false )