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

const noBoringZeros = n => +`${n}`.replace(/0*$/, "");

noBoringZeros(1450)    //145
noBoringZeros(960000)    //96
noBoringZeros(1050)    //105
noBoringZeros(-1050)    //-105
noBoringZeros(-105)    //-105
noBoringZeros(0)    //0