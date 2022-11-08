/* 
If you can't sleep, just count sheep!!

Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

function countSheep(num){
  //your code here
    s='';
    for(let i=1; i<=num; i++){
    s += i + " sheep...";
      //  s += `${i} sheep...`;
    }
  return s;
}
// "1 sheep...2 sheep...3 sheep..."
countSheep(3)