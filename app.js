let playerScore = 0;
let computerScore = 0;
var options = document.querySelectorAll('.options button');
var playerHand = document.querySelector('.player-hand');
var computerHand = document.querySelector('.computer-hand');
var winner = document.querySelector('.winner');

const startGame = () => {
  const playButton = document.querySelector('.intro button');
  const introScreen = document.querySelector('.intro');
  const match = document.querySelector('.match');

  playButton.addEventListener('click', () => {
    introScreen.classList.add('fadeOut');
    match.classList.add('fadeIn');
  });
}

const updateScore = () => {
  let $playerScore = document.querySelector('.player-score p');
  let $computerScore = document.querySelector('.computer-score p');
  $playerScore.textContent = playerScore;
  $computerScore.textContent = computerScore;
}

const playMatch = () => {
  const computerOptions = ['rock', 'paper', 'scissors'];

  options.forEach(option => {
    option.addEventListener('click', function () {
      const randomNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[randomNumber];

      playerHand.src = `./rock-paper-scissor/assets/${option.textContent}.png`;
      computerHand.src = `./rock-paper-scissor/assets/${computerChoice}.png`;


      if (option.textContent === computerChoice) {
         winner.textContent = 'It\'s a tie';
       return;
       }

       if (option.textContent === 'rock') {
         if (computerChoice === 'scissors') {
           winner.textContent = 'Player Wins';
           playerScore++;
           updateScore();
           return;
         } else {
           winner.textContent = 'Computer Wins';
           computerScore++;
           updateScore();
           return;
         }
       }

       if (option.textContent === 'paper') {
         if (computerChoice === 'scissors') {
           winner.textContent = 'Computer Wins';
           computerScore++;
           updateScore();
           return;
         } else {
           winner.textContent = 'Player Wins';
           playerScore++;
           updateScore();
           return;
         }
       }

       if (option.textContent === 'scissors') {
         if (computerChoice === 'rock') {
           winner.textContent = 'Computer Wins';
           computerScore++;
           updateScore();
           return;
         } else {
           winner.textContent = 'Player Wins';
           playerScore++;
           updateScore();
           return;
         }
       }
    });

  });
}



startGame();
playMatch();
