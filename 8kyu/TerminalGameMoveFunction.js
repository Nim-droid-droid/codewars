/*
Grasshopper - Terminal game move function
Terminal game move function

In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:

move(3, 6) should equal 15
*/

// function move (position, roll) {
//   // return roll + roll + position;
//   return roll * 2 + position;
// }

const move = (position, roll) => roll * 2 + position;

move(0, 4)    //8  4+4+0
move(3, 6)    //15 6+6+3
move(2, 5)    //12  5+5+2