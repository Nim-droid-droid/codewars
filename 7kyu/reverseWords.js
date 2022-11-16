/*
reverse words
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
              // 'dlrow olleh'              'olleh dlrow'
    return str.split('').reverse().join('').split(" ").reverse().join(" ")
}
reverseWords('hello world')