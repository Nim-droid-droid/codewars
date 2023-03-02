/*
Friend or Foe?
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

// function friend(friends){
//   //return all items with length 4
//   return friends.filter(el => el.length === 4);
// }

const friend = friends => friends.filter(el => el.length === 4);

friend(["Ryan", "Kieran", "Mark"])    //["Ryan", "Mark"])
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])    //["Ryan"])
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])    //["Jimm", "Cari", "aret"])
friend(["Love", "Your", "Face", "1"])    //["Love", "Your", "Face"])