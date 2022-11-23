/*
Remove anchor from URL
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url){
  // TODO: complete
  const hash = url.indexOf('#')
  // hash === -1 means whatever is inside indexOf() wasnt found
    // return url 
    // otherwise return url from index 0 to hash (#)
  return hash === -1 ? url : url.slice(0, hash);
} 
removeUrlAnchor('www.codewars.com/katas/')
removeUrlAnchor("www.codewars.com#about")

// function removeUrlAnchor(url){
//   // TODO: complete
//   const hash = url.indexOf('#')
//   return url.slice(0, hash);
// } 
// removeUrlAnchor("www.codewars.com#about")
// ERROR expected 'www.codewars.com/katas' to equal 'www.codewars.com/katas/'
// need to account for when its not # but / (basically anything other than #)