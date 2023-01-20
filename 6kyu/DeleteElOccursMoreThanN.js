/*
Delete occurrences of an element if it occurs more than n times

Enough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task

Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

function deleteNth(arr,n){
  // Whenever I need to keep track of (multiple) values, use obj.

  // Use object to store el of arr & keep track of number of times el occured/el value. Then return elements that is not greater than N. 
    // Wait I still need to return the el that is greater than N but only N amount of times. 
        // Just use <= n
  
  const trackRepeated = {};
// I don't know how to filter through an object using filter() but I can filter through an array
  return arr.filter( el => {
    // add each el from arr to trackRepeated obj to keep track of their repetition 
      // If currently looped el already exist in trackRepeated object increment its value by 1. If el doesn't exist in trackRepeated object add it to trackRepeated & set that key's value to 1.
    trackRepeated[el] = trackRepeated[el] + 1 || 1;

    // Return the key that was less than or equal to n (times/repitition)
    return trackRepeated[el] <= n 
  })
}

deleteNth([20,37,20,21], 1)  //[20,37,21]
deleteNth([1,1,3,3,7,2,2,2,2], 3)  //[1, 1, 3, 3, 7, 2, 2, 2]
      

//  Reduce version
// or reduce() (Since I'm returning/reducing it down to 1 value - return arr with elements <= n times), filter() (filter out all arr elmnts <= n times))

// regex version
  // Can i to use regex for search (instead of object for val storage) and only return el that matches the number of N


