/*
Regex validate PIN code
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// function validatePIN (pin) {
//   //PIN length is 4 OR 6 posititve INT = true
//     // else = false

//   // need to account for float & negative nums. 
//   // test pin str against regex, if it's a match return true otherwise false.

//   // ^ Beginning: matches the beginning of the string, or the beginning of a line if the multiple flag (m) is enabled.
//   // $ End: matchs the end of the string, or the end of the line if the multiple flag (m) is enabled.
//     // regex start & end is specified with ^ ... $ 
//       // so in this case from start (^) to end ($) of str test the string is a digit not a23 or -45 but 123
//   // [ ] Character set: match any character in the set. In this case Match the character in the range 0-9 (char code 48 to 57). Case sensitive 
//   // \d Digit code on match any teacher characters (by default its always 0-9)
//     // e.g. /[0-9]/ matches "2" in "B2 is the suite number".
//   // * Quantifier: matches zero or more of the preceding token. So much 0+ chars in the range 0-9
//     // without $ the expr will match floats
//   // g Global search
//   // m Multiline: Beginning/end anchors (^/$) will match the start/end of a line.
//   // let reg = /^[0-9]\d*$/gm
  
//   // let reg = /^(\d{4}|\d{6})$/gm
//   // return reg.test(pin);

//   // test pin str against the regex on the left, if it's a match return true otherwise false.
//   // no need to convert to num & see if val > 0 & length of PIN either 4 or 6
//     // since i dont need to return a num & str can be used for comparision using regex
//   // since \d has the val [0-9], just use \d it's a short hand
//   // instead of checking the length manually for 4 or 6 do: {4} or {6}
//     // check if pin has 4 digits or (|) 6 digits 
  
//     return /^(\d{4}|\d{6})$/.test(pin)
// }

const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);

validatePIN("-1234")    //false
validatePIN("1234")    //true
validatePIN("-1.234")   //false
validatePIN("1")    //false
validatePIN("12")   //false
validatePIN("123")    //false
validatePIN("12345")    //false
validatePIN("1234567")    //false
validatePIN("1.234")    //false
validatePIN("00000000")   //false