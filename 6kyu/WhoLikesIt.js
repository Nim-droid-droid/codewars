/*
Who likes it?
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
  // loop through the arr & place the vals/names in a placeholder. Return as Str 
    // If theres more than 3 names/vals, the placeholder holds a num instead.
    // if theres only 2 vals theyre joined with 'and' more than 2 vals are joined with ',' then 'and'
  
  // 
  // return names.map(el => el)
  // return [...names]

  // used arr instead of obj cuz i dont need to have a key, just index into teomplate arr using names.length to push in the names from names arr into template arr Placeholders.
  let template = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {num} others like this'
  ];
  // ['Max', 'John', 'Mark']
  // grab the min val between the length of names - 4 meaning get the length og names arr but the highest val that can be stored in index var is 4 cuz given by the case test thats the higest length of names arr
    // so ['Max', 'John', 'Mark'] -> 3 so 3 will be stored in index var...
    let index = Math.min(names.length, 4);
    
  // ...then i index into template arr at the index of 3 which is ->  '{name}, {name} and {name} like this'
    // Then replace name or num, which ever one is found via the ternary operator condition: if inside templare arr theres a val/theres something that equals {name}, 
      // shift/removes the first element from names arr & returns that removed el into name placeholder inside template arr @ index 3, thanks to /g this will keep happening/looping through the {name} @ index 3 until all the {name} in template arr @ index 3 are full cuz then the condition will no longer be met; val will no longer === "{name}" but something like "Max"

    // ['Alex', 'Jacob', 'Mark', 'Max'] arg
      // when val no longer or doesnt equal === "{name}" like the case is for index 4 in template arr (after the 2nd {name} i have no more {name} placeholders therefore val no longer === "{name}") Therefore the else part of TO condition is activated,
        // replace {num} with names.length which in this case is 2 cuz shift() mutates the original arr so elms 'Alex', 'Jacob' have already been removed from names arr, placed inside template arr {name} placeholders
   
  // | -> regex Disjunction: Matches either "name" or "num"
  // /g -> Global search (search full str/arr). retain the index of the last match, allowing iterative searches.
  return template[index].replace(/{name}|{num}/g, val => val === "{name}" ? names.shift() : names.length);

}
likes(['Max', 'John', 'Mark'])    //'Max, John and Mark like this');
likes([])   //'no one likes this');
likes(['Peter'])    //'Peter likes this');
likes(['Jacob', 'Alex'])    //'Jacob and Alex like this');
likes(['Alex', 'Jacob', 'Mark', 'Max'])   //'Alex, Jacob and 2 others like this');