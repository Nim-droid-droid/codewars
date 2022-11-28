/*
Highest and Lowest
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){
  
  // Cant convert multiple items in string to number using Number() only works on singly value
  // const num = Number(numbers)
  
  // const num = numbers.split(' ').map(el => Number(el))
  // numbers = numbers.split(' ').map(Number);      i used the spread operator so dont have to convert elmnt in string to number. 
    // ... converts each elmnt into numbers for me so i can now use methods like  indexOf() 

  // const num1 = Math.min(num)
  // const num2 = Math.max(num)
  // console.log(num2)
  // console.log(num2)

  

  // const num = Number([...numbers])
  // console.log(num)
  
  // whenever u find a space inside numbers, split it into an elmnt 
    // "1 2 3 4 5" -> ['1', '2', '3', '4', '5']
  num = numbers.split(' '); //without this i get '5 0' instead of '5 1'
  // spread all the values of num into this array, then grab its max value, … then return
  return `${Math.max(...num)} ${Math.min(...num)}`;

}
highAndLow("1 2 3 4 5");  // return "5 1"
