/*
Growth of a Population
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:

Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/

function nbYear(p0, percent, aug, p) {
  //p0 = Population at the beginning of a year
  // percent = what % the population is increment each year
  // aug (inhabitants coming or leaving each year)
  // p (population to equal or surpass)
  
  //  sum >= p then return num of loop iterations that was incremented with each loop
  // year variable = keep looping & calculating till sum is greater than or equal to population, then return how many loops that took.
  // convert percent val to Percentage  -> num/100 = percent version of num

  // for(let year=0; p0 < p; year++){
    //   // 1070 * 0.02 + 50
    //   p0 += p0 * (percent/100) + aug
    // }
    // return year;
    

  let year=0;
  while(p0 < p){
    p0 += p0 * percent/100 + aug | 0
    year++
  }
  return year;
  // ERROR: expected 3 to equal 4
    // solution
    // added  | 0
      // MAybe Math.floor() would have worked too.

}
nbYear(1500, 5, 100, 5000)   //15
nbYear(1500000, 2.5, 10000, 2000000)   //10
nbYear(1500000, 0.25, 1000, 2000000)   //94