let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//function 1
const generateTarget = () => {
  //generates a new target
  let newTarget;
  newTarget = Math.floor(Math.random() * 10); //generate random integer between 0 and 9;
  return newTarget;
};

//function 2
const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  //compares the guesses and decides which is closest to the random number.

  // let secretNumber = generateTarget(); // generates a random number and saves it as a secrete numberNumber

  let userDifference = userGuess - secretNumber;
  // console.log(userDifference);
  let computerDifference = computerGuess - secretNumber;
  // console.log(computerDifference);

  if (userDifference < computerDifference) {
    return true; //human wins
  }

  if (userDifference > computerDifference) {
    return false; // Computer wins
  }
};

//function 3:
const updateScore = (winner) => {
  switch (winner) {
    case 'human':
      humanScore = humanScore + 1;
      return 'Computer:' + computerScore + ' Human:' + humanScore;
      break;

    case 'computer':
      computerScore = computerScore + 1;
      return 'Computer:' + computerScore + ' Human:' + humanScore;
      break;

    default:
      return '';
      break;
  }
};
//   console.log(updateScore('computer'));

const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1;
  return currentRoundNumber;
};
