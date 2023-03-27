/*
N-th Power

This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
*/

/*
function index(array, n){
  //handle edga case 1st
    //[1, 2, 3] and N = 3 there is no 3rd index in array, hence N is outside of the array      
  if(n >= array.length) return -1
//   Otherwise raise n-th index (el in arr that im currently looping through) to n
  // [1, 2, 3, 4],2 ->  so 3 (which is at the index 2) ^ 2 (n arg)

  // index([1, 3, 10, 100],3) -> 100 (which is at the index 3) ^ 3 (n arg)
  return Math.pow(array[n], n);
}
*/

const index = (array, n) => n >= array.length ? -1 : Math.pow(array[n], n);

// couldnt figure out the logic so i looked at test cases to find the pattern then wrote that logic in the code
index([1, 2, 3, 4],2)    //9  // so 3 (which is at the index 2) ^ 2 (n arg)
index([1, 3, 10, 100],3)     //1000000
index([1, 2],3)    //-1
index([1,1,1,1,1,1,1,1,1,1], 9)    //1
index([1,1,1,1,1,1,1,1,1,2], 9)    //512
index([29,82,45,10], 3)    //1000
index([6,31], 3)     //-1    N = 3 there is no 3rd index in this array, hence N is outside of the array      
index([75,68,35,61,9,36,89,0,30], 10)    //-1