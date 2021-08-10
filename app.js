let playerScore = 0;
let computerScore = 0;
var options = document.querySelectorAll('.options button');
var playerHand = document.querySelector('.player-hand');
var computerHand = document.querySelector('.computer-hand');
var winner = document.querySelector('.winner');
var hands = document.querySelectorAll('.hands img');

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

  hands.forEach(hand => {
    hand.addEventListener('animationend', function () {
      this.style.animation = '';
    });
  });

  options.forEach(option => {
    option.addEventListener('click', function () {
      const randomNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[randomNumber];


      function compareHands(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
          winner.textContent = 'It\'s a tie';
          return;
        }

        if (playerChoice === 'rock') {
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

        if (playerChoice === 'paper') {
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

        if (playerChoice === 'scissors') {
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
      }

      setTimeout(() => {

        compareHands(this.textContent, computerChoice);

        playerHand.src = `./rock-paper-scissor/assets/${this.textContent}.png`;
        computerHand.src = `./rock-paper-scissor/assets/${computerChoice}.png`;


      }, 2000);

      playerHand.style.animation = "shakePlayer 2s ease";
      computerHand.style.animation = "shakeComputer 2s ease";

    });

  });
}



startGame();
playMatch();
