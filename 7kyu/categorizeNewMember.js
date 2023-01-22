/*
Categorize New Member
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old AND have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/
// map() or nested function


// function openOrSenior(data){
//   // Senior = 55+ and 7+
//   // To be a senior, a member must be at least 55 years old AND have a handicap greater than 7. 
//   // In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//     // otherwise Open

// return data.map((el, i) => {
//     // get the current el from data array using i para
//     // check the age at least 55 years data[i][0]
//     // AND have a handicap greater than 7 data[i][1]
//     // return the result to result array

//             // data[nestedArr][age]        data[nestedArr][handicap]
//             // How does it know to only check the 1st el @ index i in this pair of els in sub arr to see if it's >=55?
//               // cuz @ index i its saying check el 0 which is the 1st el in index i & the same goes for > 7 check:
//             // data[i][i]
//             // data[0][0]       data[0][1]
//               // at the 1st nested array/0 index array, grab it's 1st el @ index 0 (which is 18) is it >=55 AND at the 1st nested array/0 index array, grab it's 2nd/@ index 1 el (which is 20) & check if it's > 7
//             // data[1][0]       data[1][1]
//               // at the 2nd nested array (which is @ index 1 index), grab it's 1st el @ index 0 (which is 45) is it >=55 AND then grab it's 2nd el which is @ index 1 (which is 2) & check if it's > 7
//             // data[2][0]       data[2][1]
//     return (data[i][0] >= 55 && data[i][1] > 7) ? "Senior":"Open";

    
//   })
// }
// Destructuring, retrieve els from data arr & store them in age & handicap variables using map()
// Since its destructuring an arr I'm using [ ] instead of { }
const openOrSenior = data => data.map(([age, handicap]) => age >= 55 && handicap > 7 ? "Senior" : "Open")

// filter() wouldnt work cuz itll just return the els that meet the condition instead of replacing them with "Senior" or "Open"
// ERROR: 
// expected [ [ 45, 12 ], [ 55, 21 ], [ 19, -2 ], [ 104, 20 ] ] to deeply equal [ 'Open', 'Senior', 'Open', 'Senior' ]


            // data[i],data[i],
            // data[0], data[1],data[2],
openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]])
// Output
//['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior']