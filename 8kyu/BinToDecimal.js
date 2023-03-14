/*
Bin to Decimal

Complete the function which converts a binary number (given as a string) to a decimal number.
*/

// function binToDec(bin){
//   // parse a str & returns an int of the specified radix (the base in mathematical numeral systems).
//   //   return Math.pow(bin, 2)
//   //   ERROR: Expected: 73, instead got: 1002003002001
  
//   // parseInt(string|binary, radix)
//   // parseInt() takes a binary or str & radix param, & returns a number. Calling parseInt(binary, radix) tells JavaScript to convert binary to a number containing the decimal representation of binary/str para val. If binary is not a str, it will be converted to one using the toString() function.
  
//   // 101010 = 42
//     //   (101010)2 = (42)10
//     // Step by step solution
//     // Step 1: Write down the binary number:
//     // 101010
//     // Step 2: Multiply each digit of the binary number by the corresponding power of two:
//     // 1x25 + 0x24 + 1x23 + 0x22 + 1x21 + 0x20
//     // Step 3: Solve the powers:
//     // 1x32 + 0x16 + 1x8 + 0x4 + 1x2 + 0x1 = 32 + 0 + 8 + 0 + 2 + 0
//     // Step 4: Add up the numbers written above:
//     // 32 + 0 + 8 + 0 + 2 + 0 = 42.
//     // So, 42 is the decimal equivalent of the binary number 101010.
//   return parseInt(bin, 2)
// }

const binToDec = bin => parseInt(bin, 2);