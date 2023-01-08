/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe

altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/

// Just need to check for case & reverse it


String.prototype.toAlternatingCase = function () {
  // grab this (whatever is attached to toAlternatingCase by dot notation) & split it where ever theres No space (so they get added into an array as individual elements) then loop through each element in the arr and check if it's uppercase, if it is, lowercase. If it's not uppercase, uppercase it. Then join all the elements in the arr with no space in between each el (space is also an el in the arr so u dont need to worry about spaces between words disappearing)

  // "HELLO WORLD"    -->    ['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D']
  return this.split('').map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('');
}
"HELLO WORLD".toAlternatingCase()  //"hello world");
"hello WORLD".toAlternatingCase()  //"HELLO world");
"HeLLo WoRLD".toAlternatingCase()  //"hEllO wOrld");
"12345".toAlternatingCase()  //"12345");
"1a2b3c4d5e".toAlternatingCase()  //"1A2B3C4D5E");
"String.prototype.toAlternatingCase".toAlternatingCase()  //"sTRING.PROTOTYPE.TOaLTERNATINGcASE");