/*
Rock Paper Scissors!
Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

scissors beats paper
paper beats rock
rock beats scissors
*/



// function rps(p1, p2){
// // if theres 3 or more values you need to look up, use an object.
//   const wins = {
//       'rock': 'scissors',
//       'scissors': 'paper',
//       'paper': 'rock'
//     };
    
//   if (p1 == p2) {
//       return 'Draw!';
//   } else {
//     // whatevr the user inputs for p1 will be used as the key.
//       // Here rock is used, so find the 'rock' key & get its value, the value of 'rock' key is scissors. 
//         // so here wins[p1] === 'scissors'
//         // if user put in 'paper' for p1 wins[p1] === rock
//         // so when i say [p1] im saying grab the value of 'rock' key which is scissors, is scissors == scissors, if so return 1 (cuz that means the user typed in rock) otherwise return 2 (cus that mans the user typed in paper) & thats the value held/printed in this placeholder.
//         return `Player ${wins[p1] === p2 ? 1 : 2} won!`;
//     }
// }
// rps("rock", "scissors")

//   return p1 === "scissors" && p2==="paper" ? 'Player 1 won1' : p1 === "scissors" && p2==="rock" ? "Player 2 won!" : p1 === "rock" && p2==="scissors" ? 'Player 1 won1' : "Draw!";
// }
// rps("scissors", "paper")

const rps = (p1, p2) => {
  const wins = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };

  if(p1 === p2){
    return 'Draw!'
  }else{
    return `Player ${wins[p1] === p2 ? 1 : 2} wins!`;
  }
};
rps("scissors", "paper")

