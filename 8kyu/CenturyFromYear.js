/*
Century From Year
Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task

Given a year, return the century it is in.

Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
  // if the last digit is 1 or greater the century goes up. if the last digit is 0, (year & centurt match up), so just return 1st two digits without rounding them up.
    // Math.ceil does exactly this. rounds up or just rounds depending on whether last digit (in decimal) is 0 or 1. so turn number to decimal using /100 
    //using ceiling method to round up to nearest century (100)
      // 1705 --> 1705 / 100 = 17.05    Math.ceil(17.05) = 18
      // 2000 --> 2000 / 100 = 20    Math.ceil(20) = 20
      // 89 --> 89/100 = 0.89    Math.ceil(0.89) = 1

  // formula to get century:  century = year / 100
  // divide by 100 cuz im working with century
    return Math.ceil(year/100);


}
century(2000)// 20    How to get 20 out of 2000? /100
century(89)// 1, 'Testing for year 89'    89/100 = 0.89 round that up = 1