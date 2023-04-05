/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
  //How many chars occur twice not the number of re-occurrences
  let duplicate=0;
  // make everything case-insensitive
  // store char & num in obj
    // if no char, num occure more than 1, return 0. otherwise return number of char, num that occur more than 1
  const txtObj = [...text.toLowerCase()].reduce((acc, el) => {
    acc[el] = acc[el] + 1 || 1;
    return acc
  }, 
  {});

  // console.log(txtObj) //{1: 2, a: 2}

  // cant use map/filter to iterat through obj
  // return txtObj.map(el => copy[el] == 1 ? 0 : dublicate++)

  // Grab all the keys from the txtObj object 
  // then find the key whose value is odd 
  // the convert that key from str to a number using Number()/+ & then return that number
    // +/Number() obj cuz object keys are str data types so this needs to be converted since I want the key returned as a num
  // return +Object.keys(txtObj).some(key => console.log(txtObj[key]) );

  // The for in loop iterates over txtObj object
  // Each iteration returns a key (x)
  // The key is used to access the value of the key
  // The value of the key is txtObj[i]
  for(let i in txtObj){
    // Now that I can iterate through the keys in the object I can check if the current key I'm looping through has the value >1
      // A key'z value is greater than 1, increment duplicate by 1
    if(txtObj[i] >1){
      duplicate++
    }
  }
  return duplicate;
}

duplicateCount("aA11")    //2
duplicateCount("abcde")    //0  no chars occure more than 1 time
duplicateCount("")    //0
duplicateCount("aabbcde")    //2  2 chars (a & b) occure more than once
duplicateCount("aabBcde")    //2
duplicateCount("Indivisibility")    //1   cuz only 1 char: 'i' occurs more than 1 times
duplicateCount("Indivisibilities")    //2