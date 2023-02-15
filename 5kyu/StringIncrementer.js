/*
String incrementer
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/
// HAVENT ADDED TO GITHUB OR SUBMITTED IN CODEWARS
// TODO   Get all the numbers At the end of the string and increment

// function incrementString (strng) {
//   // Grab the last char index check if it's a num; if it is, increment it, else add one to the end of that string

//   // const num = strng.slice(-1);
//   // let n;
//   // if(/\d/g.test(num)){
//   //   n=Number(num);
//   //       return strng.concat(n+1);    //"foobar999" -> 'foobar99910' only the last digit is incremented then Concatenated to the string
//   //         // So instead of checking if only the last char of str is a num, I should check if the str ends in num

//   //       // If I can't find a way to only check the end of the str for digits, I have to do reverse loop or filter nums into a var, arr or slice into arr until i come across a char thats no longer a num 
//   // }else{
//   //   return strng.concat(1);
//   // }

  
//   // filter & replace or regex & replace
//   return strng.replace(/[0-8]?9*$/, (el) => el ? + el + 1 : 1)
// }

let incrementString = strng => strng.replace(/[0-8]?9*$/, (el) => el ? + el + 1 : 1)

incrementString("foo") // "foo1"
incrementString("foobar999") // "foobar1000"
incrementString("1") // "2"
incrementString("foobar000") // "foobar001"
incrementString("foobar00999") // "foobar01000"
incrementString("foobar001") // "foobar002"
incrementString("foobar1") // "foobar2"
incrementString("009") // "010"
incrementString("fo99obar99" ) // "fo99obar100