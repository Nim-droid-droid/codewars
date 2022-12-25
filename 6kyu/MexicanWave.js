/*
Mexican Wave
Introduction

The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
Task

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules

 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

*/

function wave(str){
  // Code here
  // [...str] so "hello" -> ['h', 'e', 'l', 'l', 'o'] str converted to array now i can use slice
  // .map() will always return an array with the same length that you call it on, so, since ['h','e','l','l','o'].length is 5, you get a 5 element array back. 
    // hence the return value of an array of 5 instead of array of 1 ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
  // slice off from 0 to i (but not including i) 
    // then turn the current elm been looped through to upper case but dont affect the rest after i cuz str.slice(i + 1)
    //  + since it's working with strings it is concatenating them. So it take the values from str.slice(0,i), el.toUpperCase(), and str.slice(i + 1) separately and combines them all into one new string.
  // filter out elment that is NOT equal to str (original argument) & return
    // (y use filter) with map, string with spaces still return a str without no one uppercase letter, so that last filter is necessary to remove it


  // const strCopy = [...str];
  return [...str].map((el, i) => str.slice(0,i) + el.toUpperCase() + str.slice(i + 1)).filter(e => e != str);

}
wave("hello")