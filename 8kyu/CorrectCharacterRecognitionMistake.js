/*
Correct the mistakes of the character recognition software

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

// function correct(string)
// {
// 	// replace 5 -> S O -> 0 I -> 1
  
//   // return string.replace('5', "S").replace("0", "O").replace("1", 'I')
//     // replace only replaces the 1st find so this doesnt work with L0ND0N

//   // regex to search & replace globally (all finds), & since im search for 2+ vals use obj. Use obj to replace (when the key is found replace it with its val)
//   const map ={
//     '5': "S",
//     "0": "O",
//     "1": 'I'
//   }
// //             .replace(searchPattern, replacement)
// // No need to loop as the Global flag /g search through the entire string 
//   return string.replace(/[501]/g, el => map[el])

// }

const map = {
  '5': "S",
  "0": "O",
  "1": 'I'
}
const correct = string => string.replace(/[501]/g, el => map[el])


correct("PAR15")    //"PARIS"
correct("DUBL1N")   //"DUBLIN"
correct("L0ND0N")   //"LONDON"
correct("51NGAP0RE")    //"SINGAPORE"
correct("BUDAPE5T")   //"BUDAPEST"

/*
replace() search & replace MORE than 1 thing with the use of regex global flag
function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}


const correct = string => string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");

*/