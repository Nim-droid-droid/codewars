/*
Printer Errors

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
printerError(s) => "3/56"
*/

/** 
function printerError(s) {
  // return the length of str & sum/length of chars outside a-m
  
// 
  // put s into arr, loop through it
    // if chars outside a-m, increment sum var or filter out
  let sCopy = s.split('').reduce((acc, el) => {
    el == /[n-z]/g
    acc++
  return acc}, 0);

  return sCopy + '/' + s.length;    //22/22  WHY didnt this work? come back & fix
// 

  // im not getting the corect length of chars outside a-m like this. So instead of searching for chars outside a-m , deduct a-m from s str & thatll give the lenth/sum of chars outside a-m
  return s.replace(/[a-m]/g, "").length + "/" + s.length;
}
*/

// const printerError = s => `${s.replace(/[a-m]/g,'').length}/${s.length}`

const printerError = s => `${s.split("").reduce((acc, cur) => acc + (cur > "m") | 0)}/${s.length}`;


printerError("aaaxbbbbyyhwawiwjjjwwm") //8/22
printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz") //"3/56"
