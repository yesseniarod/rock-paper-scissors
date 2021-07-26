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

const playMatch = () => {
  const computerOptions = ['rock', 'paper', 'scissors'];

  options.forEach(option => {
    option.addEventListener('click', function () {
      const randomNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[randomNumber];


      if (option.textContent === computerChoice) {
         winner.textContent = 'It\'s a tie';
       return;
       }

       if (option.textContent === 'rock') {
         if (computerChoice === 'scissors') {
           winner.textContent = 'Player Wins';
           return;
         } else {
           winner.textContent = 'Computer Wins';
           return;
         }
       }

       if (option.textContent === 'paper') {
         if (computerChoice === 'scissors') {
           winner.textContent = 'Computer Wins';
           return;
         } else {
           winner.textContent = 'Player Wins';
           return;
         }
       }

       if (option.textContent === 'scissors') {
         if (computerChoice === 'rock') {
           winner.textContent = 'Computer Wins';
           return;
         } else {
           winner.textContent = 'Player Wins';
           return;
         }
       }
    });

  });
}


startGame();
playMatch();
