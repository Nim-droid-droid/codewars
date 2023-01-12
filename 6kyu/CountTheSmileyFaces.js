/*
Count the smiley faces!
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces:  ;( :> :} :]

Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  // Loop over and search for these 4 characters: :  )  D  ; 
  arr.map(
    // return arr.filter(el => /^[;:][-~]{0,1}[)D]$/.test(el)).length
    // return arr.filter(el => /[;:][-~]{0,1}[)D]/.test(el)).length
    // return arr.filter(el => /[;:]{0,1}[)D]/.test(el)).length

    // since the nose isnt needed for validity i omitted it.
      // no need for ^ since the 1st [] checks from the Beginning of the str - in this case since its an arr of el it checks the begining of eah el. 
      //no need for {0,1} cuz ? in regex means match between 0 & 1 of the preceding token ([;:])
    arr.filter(el => /[;:]?[)D]/.test(el)).length )
  
}
countSmileys([]                             )    //0
countSmileys([':D',':~)',';~D',':)']        )    //4
countSmileys([':)',':(',':D',':O',':;']     )    //2
countSmileys([';]', ':[', ';*', ':$', ';-D'])    //1