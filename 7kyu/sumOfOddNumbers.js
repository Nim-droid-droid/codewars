/*
Sum of odd numbers
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
  //  n is not only the line number but also equals the number of numbers on that line. so n = 3 also have 3 odd numbers on it??

  // (2nd row) if i took 1 from 5 & added it to 3 both numbers are 4
  // (3rd row) if i took 2 from 11 & added it to 7 now all three numbers are 9
  // (4th row) if i took 3 from 19 (so now 16) & added it to 13 (13+3=16), then took 1 from 17 (so now 16) & added it to 15 now all four numbers are 16
  // …
  
  /*
  // sum of row 1: 1
  // sum of row 2: 8
  // sum of row 3: 27
  // sum of row 4: 64
  // sum of row 5: 125
   What do all theses numbers sums have in common? Theyre all perfect cube numbers hence we can get them by this formula: n to the power of 3 
   1**3 = 1
   2**3 = 8
   3**3 = 27
   4**3 = 64
   5**3 = 125
   */

  // Mathematically, the sum of the nth line of odd numbers is n3, so this gives the correct result:
  // return n * n * n;
  // return n**3;
  return Math.pow(n, 3);
}
rowSumOddNumbers(2) //8
rowSumOddNumbers(5) //125