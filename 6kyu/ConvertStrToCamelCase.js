/*
Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
// search & replace _ or -, then target the el at the next index & uppercase it

  let regex = /[-_]\w/g;
  // since \w flag in regex also grabs the el after whatever is inside [] charAt()
    // in the_stealth_warrior = _s AND (cuz of /g flag) _w so charAt(1) = s (cuz _ is @ index 0 & s @ idx 1) AND w (cuz _ is @ index 0 & w @ idx 1)
  return str.replace(regex, (el) => el.charAt(1).toUpperCase());

  // return str.replace(/[-_]\w/g, (el) => el.charAt(1).toUpperCase())

}
toCamelCase("the_stealth_warrior")     //"theStealthWarrior"
toCamelCase('')    //'', "An empty string was provided but not returned")
toCamelCase("The-Stealth-Warrior")     //"TheStealthWarrior"
toCamelCase("A-B-C")     //"ABC"