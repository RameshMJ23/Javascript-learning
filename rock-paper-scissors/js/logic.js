
//JSON objects can't store functions
let score = JSON.parse(localStorage.getItem('score'))
  || {
    wins: 0,
    losses: 0,
    ties: 0
  };

//null values are also falsy values
/*if(!score){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}*/

updateScore();

function playGame(userMove){

  const randomNumber = Math.random();

  let computerMove = '';

  let result = '';

  if(randomNumber >= 0 && randomNumber < 1/3 ){
    computerMove = 'rock';
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }else if(randomNumber >= 2/3 && randomNumber <=1){
    computerMove = 'scissors';
  }

  // function stop after returning a value
  // return computerMove;
  if(userMove === computerMove){
    result = 'You tie.';
  } else if(userMove === 'scissors'){
    if(computerMove === 'rock' ){
      result = 'You lose.';
    } else if(computerMove === 'paper'){
      result = 'You won. Congrats!';
    }
  } else if(userMove === 'paper'){
    if(computerMove === 'rock' ){
      result = 'You won. Congrats!';
    } else if(computerMove === 'scissors'){
      result = 'You lose.';
    }
  } else if(userMove === 'rock'){
    if(computerMove === 'paper'){
      result = 'You lose.';
    } else if(computerMove === 'scissors'){
      result = 'You won. Congrats!';
    }
  }

  if(result === 'You won. Congrats!'){
    score.wins++;
  }else if(result === 'You lose.'){
    score.losses++;
  }else if(result === 'You tie.'){
    score.ties++;
  }

  document.querySelector('.js-results')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You <img src="resources/${userMove}-emoji.png" class="move-icon">
        <img src="resources/${computerMove}-emoji.png" class="move-icon"> Computer `;

  updateScore();

  //localStorage can only store strings
  //JSON.stringify helps to make the objects into strings
  //JSON.parse helps to convert string values in localStorage into objects 
  localStorage.setItem('score', JSON.stringify(score));
}

function updateScore(){
  document.querySelector('.js-score')
  .innerHTML = `wins: ${score.wins}, losses: ${score.losses},ties: ${score.ties}`;
}
