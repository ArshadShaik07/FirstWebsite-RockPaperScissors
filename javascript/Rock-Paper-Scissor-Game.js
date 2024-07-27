let score=JSON.parse(localStorage.getItem('score'));

if (score===null) {
  score={
    wins:0,
    losses:0,
    tie:0
  }
}

document.querySelector('.js-score').innerHTML=`Wins : ${score.wins}  Loses : ${score.losses}  Tie : ${score.tie}`;

function asliGame(playerMove){
  const computerMove=computerMovePicker();
  let result='';

  if(playerMove==='Rock'){
    if (computerMove==='Rock'){
      result='Tie';
    }

    else if (computerMove==='Paper'){
      result='You Lose';
    }

    else{
      result='You Win';
    }
  }

  else if(playerMove==='Paper'){
    if (computerMove==='Rock'){
      result='You Win';
    }

    else if (computerMove==='Paper'){
      result='Tie';
    }

    else{
      result='You Lose';
    }
  }

  else if(playerMove==='Scissors'){
    if (computerMove==='Rock'){
    result='You Lose';
    }

    else if (computerMove==='Paper'){
    result='You Win';
    }

    else{
      result='Tie';
    }
  }

  if (result==='You Win'){
  score.wins+=1
  }

  else if (result==='You Lose'){
    score.losses+=1
  }

  else if(result==='Tie'){
    score.tie+=1
  }

  localStorage.setItem('score',JSON.stringify(score));

  scorePara();

  document.querySelector('.js-result').innerHTML=result;

  document.querySelector('.js-moves').innerHTML=`
  You 
  <img src="images/${playerMove}.png" class="move-img" alt=""> 
  
  <img src="images/${computerMove}.png" class="move-img" alt=""> 
  Computer`;

}

function scorePara (){
  document.querySelector('.js-score').innerHTML=`Wins : ${score.wins}  Loses : ${score.losses}  Tie : ${score.tie}`;
};



function computerMovePicker(){
  const game = Math.random();
  let computerMove='';

  if (game>=0 && game<1/3){
    computerMove = 'Rock';
  }

  else if (game>=1/3&& game<2/3){
    computerMove = 'Paper';
  }

  else{
    computerMove = 'Scissors';   
  }
  return computerMove;
}