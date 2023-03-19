/*
No zeros for heros

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

// function noBoringZeros(n) {
//   // reverse loop & each el that is < 1 gets replaced with empty str/nothing
//   // if length is 1, leave it

//   // 1st i need to either turn the int to str or arr, so i can use their methods. Then convert back to a num using UO(+)

//   // + : match up whatever comes before it 1 or more tmes (so look for 1 or more 0)
//   // $ : starts searching from the end, it doesnt take anything from the start or middle.
//   return +String(n).replace(/0+$/g, "");
// }

// const noBoringZeros = n => +`${n}`.replace(/0*$/, "");

const noBoringZeros = (n) => {
  // if n === 0 return n (return 0)
  if (n === 0) return n;

  // if n modulo 10 == 0 (so 10 goes into n with no remainders) return n/10
    // so 1450 % 10 = 0
  if (n%10 === 0 ) return noBoringZeros(n/10);

  //else/otherwise (meaning n = 0 or devisable by 10=0 so its negative num:  -0) return n
    // -1050 % 10 = -0
  else return n;
} 


noBoringZeros(1450)    //145
noBoringZeros(960000)    //96
noBoringZeros(1050)    //105
noBoringZeros(-1050)    //-105
noBoringZeros(-105)    //-105
noBoringZeros(0)    //0