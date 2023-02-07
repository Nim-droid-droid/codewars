/*
Round up to the next multiple of 5
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

function roundToNext5(n){
  // Let's do a little reverse engineering

  // to get this 2    ->   5
    // 2/5 = 0.4 -> 0
    // i need to / 2 by 5, round up to the next integer, then * by 5 again
    // 2/5 = 0.4 -> 1 * 5= 5 but 0.4 Rounded to Nearest Whole Number/integer is 0 but i need it to be 1 so use Math.ceil(), it rounds up anything > 0 to the next integer - another demo below 
    
  // 21   ->   25
      // 21/5= 4.2 -> 4 * 5=20?? should be 25 but 4.2 rounded up needs to be 5 not 4 Math.ceil() can do this
    return Math.ceil(n/5)*5;
}
roundToNext5(21)