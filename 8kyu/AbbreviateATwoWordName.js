/*
Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// function abbrevName(name){
//   return name.split(' ').map(el => el[0].toUpperCase()).join('.');
// }

const abbrevName = name => name.split(' ').map(el => el[0].toUpperCase()).join('.');

abbrevName("Sam Harris")    //"S.H"
abbrevName("Patrick Feenan")    //"P.F"
abbrevName("Evan Cole")    //"E.C"
abbrevName("P Favuzzi")    //"P.F"
abbrevName("David Mendieta")    //"D.M