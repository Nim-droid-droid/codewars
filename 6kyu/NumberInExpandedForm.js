/*
Write Number in Expanded Form
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

Test Case
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/

function expandedForm(num) {
  // The expanded form of the number is the splitting of numbers based on the place value, such as ones, tens, hundreds, thousands, ten thousand etc
  // How to get the expansded form of a number
    // The numbers that are represented as the sum of each digit multiplied by its place value is called the expanded form of the numbers.
    // Splits the number, and it represents the number in units, tens, hundreds and thousands form.
  
    // the last number is a 1's place. Eerytime u move to the left u multiply of 10 on the digit.
      // 70304    ->    700*100 = 70000 (7 ten-thousand)    30*10 or 10 + 10 + 10 = 300 (3 hundreds)    4*1 = 4 (4 ones)    
      //                70000                           +   300                                     +   4
      // (7*10000) + ()
      //                digit * 100, 10*10=100              1 * 10, digit * 10                          1*1, digi * 1

  // return string
  // NOTE: All numbers will be whole numbers greater than 0.
  num = String(num);
  //store the expanded forms in here
  const expdForm = []; 

  //cuz i start from 1 (then multiply by 10)
  // 1 = 1 
  // (all * 10 cuz multiplier *= 10)
  // 1*10 = 10
  // 10*10 = 100
  // 100*10 = 1000
  let multiplier = 1; 

  for(let i=1; i<num.length; i++){
    // loop backwards. Start from the last digit/char in num str. So if num = '70304' -> digit is '4'
    const digit = num[num.length - i]
    
    // SHORT CIRCUITING 
    // if digit is greater than 0, then multiply digit by val in multiplier variable, then using unshift() adds elmnt to the beginning of expdForm array.
    // So if num = 70304
    // 4 * 1
    // 30 * 10
    // 700 * 100
    digit > 0 && expdForm.unshift(digit*multiplier)

    // whatever the val is in multiplier * it by 10. Then store the new val in multiplier variable.
    multiplier *= 10
  }

  // connect, join each el in exdForm arr with +
  return expdForm.join(' + ');
}
expandedForm(12)  //'10 + 2'
expandedForm(42)  //'40 + 2'
expandedForm(70304)   //'70000 + 300 + 4'

