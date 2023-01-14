/*
How good are you really?

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

// function betterThanAverage(classPoints, yourPoints) {
//   // Is yourPoints Greater than classPoints summed up and divided by the amount of elements in classPoints array?
//   // In the case test it seems to also potentially if classPoints === yourPoints?

//   //sum ..., 0)  -> const sum=0       sum + el -> sum+=el
//   // return classPoints.reduce((sum,el) => sum + el, 0)/classPoints.length > yourPoints ? false : true;

//   // if the equation is true, itll return true, otherwise itll return false, no need for ternary operator.
//   return classPoints.reduce((sum,el) => sum + el, 0)/classPoints.length < yourPoints;
// }

const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((sum,el) => sum + el, 0)/classPoints.length < yourPoints;


betterThanAverage([2, 3], 5)  //true
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)  //true 59.6 < 75
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)  //False
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)  //false