/*
Take a Ten Minutes Walk
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {
  // You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
  // (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

  // so 1 letter = 1 block which = 1 min so 1 letter = 1min so 10 letters = 10min
    // so if theres 10 letters in the array return true. OTHERWISE return false.
  // Also according to the test units if a letter is repeated consecutively so ['n','n','s'…] return false. Has to ALSO be this ['n','s','n',…] to return true

    // if(walk.length > 9){
    //   return true;
    // }else{
    //   return false;
    // }

    // if(walk.length > 10 || walk.length <10){
    //   return false;
    // }else{
    //   return true;
    // }

  // Going off unit test: i need to group s & n, w & e together so i can search for them
  // filter out/find all the items in walk array that = 'n', grab the sum of them & store in north. SO if it finds 4 'n' north val is 4
  const north = walk.filter(item => {return item === 'n'}).length;
  const south = walk.filter(item => {return item === 's'}).length;
  const east = walk.filter(item => {return item === 'e'}).length;
  const west = walk.filter(item => {return item === 'w'}).length;

  // Check if array length = 10, does the length, meaning the amount of n = s or e = w
  return walk.length === 10 && north === south && east === west;

}

isValidWalk(['n', 's', 'w', 'e']);

/* 
function isValidWalk(walk) {
  function count(val){
    return walk.filter( function(a) {return a==val;}).length
  }
  return walk.length == 10 && count('n')==count('s') && count('w')==count('e')
  // if(walk.length > 9){
  //   return true;
  // }else{
  //   return false;
  // }
}


// !walk.reduce(    need this to NOT be true if we want this to = 0
// the calculation returned from reduce needs to equal 0 cuz if a path ends again with 0, we know it can return true (return you to your starting point) So going by test unit:
  // ns (north-south) should equal 0 
  // we (west-east) should equal 0 

// whats happening in the obj? (i think)
  // if the direction is north, north-south add 1 - leaving
  // if the direction is south, north-south subtract 1 - coming back
  // if the direction is west, west-east subtract 2 - coming back
  // if the direction is east, west-east add 2 - leaving

// use [curr] to access the key&value pairs within the obj next to prev
// 0 to set initial value of prev to 0 cuz if paths start with 0 (set equal to 0) we can increment or decrement
const isValidWalk = walk => walk.length == 10 && !walk.reduce((prev, curr) =>
                                                              // have to do 'n':1. "e":2 isnted of 'n':1. "e":1 cuz 1+1 wont add up. Same reason for "s" & "w"
                                                              prev + {'n':1. "e":2, "s":-1, "w":-2}[curr],0)
*/