/*
Grasshopper - Personalized Message
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

// function greet (name, owner) {
//   // Add code here
//   // if(name == owner){
//   //   return 'Hello boss'
//   // }else{
//   //   return 'Hello guest'
//   // }


//   // return name == owner ? 'Hello boss' : 'Hello guest';


//   return `Hello ${name==owner?'boss':'guest'}`
// } 
greet('Daniel', 'Daniel') //'Hello boss'
greet('Greg', 'Daniel') //'Hello guest'

// FURTHER REFACTOR
const greet = (name, owner) => name == owner? 'Hello boss': 'Hello guest';