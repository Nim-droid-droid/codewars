/*
Opposites Attract
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

// function lovefunc(flower1, flower2){
//   // even + odd = truth

//   // flower1%2==1 && flower2%2===0
//   // if(flower1%2 && flower2%2===0){
//   //   return true
//   // }else if(flower1%2==0 && flower2%2){
//   //   return true
//   // }else{
//   //   return false
//   // }

//   return flower1%2 && flower2%2===0 ? true : flower1%2==0 && flower2%2 ? true : false;
// }

// const lovefunc = (flower1, flower2) => flower1%2 && flower2%2===0 ? true : flower1%2==0 && flower2%2 ? true : false;

// flower1 % 2 = 1 Is not equal to flower2 % 2 = 1 (Meaning they are not both odd numbers so one has to odd while the other is even) Return true (otherwise it return false)
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;

lovefunc(1,4)    //true
lovefunc(2,2)    //false
lovefunc(0,1)    //true
lovefunc(0,0)    //false

/* 
         const
       lovefunc
      =( Ͼ , Ͽ )=> 
          ! !
( ( Ͼ & 1) ^ (1 & Ͽ ) )

How does it work

! ! ( ( Ͼ & 1) ^ (1 & Ͽ ) )

The function uses bitwise & (and) to examine the lowest bit, which is a determinant whether a number is odd or even. (1 indicates odd; 0, even).

It performs exclusive or ^ to determine whether they are different. Exclusive or is equivalent to the logical comparison operator !=. (True means not equal; False, equal)

The ! ! (not not) operators are used to convert the binary result of ^ into a Boolean True/False. The first ! converts the result into Boolean type, but undesirably negates the value. The second ! negates the value again to restore the original meaning.

You would get the same result with

( Ͼ & 1) != (1 & Ͽ )

But it wouldn't be as picturesque.

i think Ͼ is just variable name of argument basically he changed the parameter's name from flower1 to Ͼ and vice versa so as he can make shit diagram like program.

I think these characters: Ͼ Ͽ are characters from glagolica alphabet.
*/