/*
I love you, a little , a lot, passionately ... not at all
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
*/

// function howMuchILoveYou(nbPetals) {
//   // more than 6 petals, you START OVER with "I love you" for 7 petals, "a little" for 8 petals and so on.
//   // >6 so 7 -> "I love you" 
//   // 8 -> "a little"
//   // 2 -> "a little"
//   // 1-> "I love you"
//   // 3 -> "a lot"

//   // since im mapping for 3+ values ill use obj
//     // then use the arg the user inputas the key to subtract the val
//     // in the test 8 seems to be the highest input so maybe i dont have to check for 8+
//   const love = {
//         1 : "I love you",
//         2 : "a little",
//         3 : "a lot",
//         4 : "passionately",
//         5 : "madly",
//         6 : "not at all",
//         7 : "I love you",
//         8 : "a little",
//   }
//   return love[nbPetals];
// }



/*
// Since i have multiple/a list of strings/els AND after 6 we START OVER (so back at 0) with "I love you" so i can also use modulus 6 & use arg as index in arr to get val

// store all the strings in arr
const lovee = [
  "not at all",
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly"
]
// return the va at the index of arg
const howMuchILoveYou = nbPetals => lovee[nbPetals % 6];
// nbPetals % 6 so its starts over at 0 which is "I love you"
// 1 % 6 = 1 -> index 1 hence why "I love you" is the 2nd item in the arr which is at index 1
// 2 % 6 = 2    6 doesnt go into 2 hence the dividend 2 is returned. Same with dividend 1 above.
// 6 % 6 = 0
// 7 % 6 = 1
// 8 % 6 = 2 & The key 2 has the value "a little" which is the same as the value of key 8 
*/

// I'm only using 1 arr no need to store it in a variable
const howMuchILoveYou = nbPetals => ['not at all','I love you','a little','a lot','passionately','madly'][nbPetals % 6]

howMuchILoveYou(7)    //I love you
howMuchILoveYou(3)    //a lot
howMuchILoveYou(6)    //not at all