/*
Convert Hash To An Array

Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.
*/

/*
function convertHashToArray(hash){
  //your code here - sort the keys!
  //Object.entries(obj) to get an array of key/value pairs from obj. entries() turns each property+value inside hash into its own array 
    // so hash has 2 separate arrays: {name: "Jeremy", age: 24})  ->  [["age", 24], ["name", "Jeremy"]]);
  // The default sort() order is ascending so a-z
  return Object.entries(hash).sort();
}
*/

const convertHashToArray = hash => Object.entries(hash).sort();

convertHashToArray({name: "Jeremy"})    //[["name", "Jeremy"]]);
convertHashToArray({name: "Jeremy", age: 24})    //[["age", 24], ["name", "Jeremy"]]);
convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"})    //[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
convertHashToArray({product: "CodeWars", powerLevelOver: 9000})    //[["powerLevelOver", 9000], ["product", "CodeWars"]]);
convertHashToArray({})    //[]);


