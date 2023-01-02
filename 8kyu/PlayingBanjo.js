/*
Are You Playing Banjo?
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

TEST
areYouPlayingBanjo("Adam") //"Adam does not play banjo");
areYouPlayingBanjo("Paul") //"Paul does not play banjo");
areYouPlayingBanjo("bravo") //"bravo does not play banjo");
areYouPlayingBanjo("rolf") //"rolf plays banjo");
*/

// function areYouPlayingBanjo(name) {
//   // return name + (name[0].toUpperCase() == 'R' ? ' plays ' : ' does not play') + " banjo";
//   return name[0].toUpperCase().includes('R') ? name + " plays banjo" : name + " does not play banjo";
  
// }

const areYouPlayingBanjo = name => name[0].toUpperCase().includes('R') ? name + " plays banjo" : name + " does not play banjo";
areYouPlayingBanjo("Adam");
areYouPlayingBanjo("Ringo") //"Ringo plays banjo");