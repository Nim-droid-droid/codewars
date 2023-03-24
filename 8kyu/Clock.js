/*
Beginner Series #2 Clock

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:

h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/


/*
function past(h, m, s){
  //To convert the time from seconds to milliseconds, multiply: seconds x 1000
  // To convert the time from minutes to milliseconds, multiply: minutes * 60000
  // To convert the time from hours to milliseconds, multiply: hours * 3600000
  // Then add all the milliseconds together
  return h * 3600000 + m  * 60000 + s * 1000;
}
*/

const past = (h, m, s) => h * 3600000 + m  * 60000 + s * 1000;

// 0 hours 1 minute and 1 second after midnight 
past(0,1,1)    //61000
// 1 hour, 1 minute, and 1 second had passed since midnight.
past(1,1,1)    //3661000
past(0,0,0)    //0
past(1,0,1)    //3601000
past(1,0,0)    //3600000
