let randomNumber = Math.floor(Math.random()* 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');



let guessCount = 1;
let resetbutton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if(guessCount === 1) {
    guesses.textContect ='Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if(userGuess === randomNumber){
    lastResult.textContent = 'Congratulations! You got it right'
    lastResult.style.backgroundColor = 'rgb(189, 255, 102)';
    lowOrHi.textContent = ' ';
    setGameOver();
    
  }else if (guessCount === 10){
    lastResult.textContent = 'GAME OVER';
    setGameOver();
  }else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'rgb(255, 102, 102)';
    if(userGuess < randomNumber){
      lowOrHi.textContent = 'Last guess was too low'
    }else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!'
    }
  }

  guessCount++;
  guessField.value = ' ';
  guessField.focus();
}
document.addEventListener('keydown',function(e){
  if (e.keyCode == 13) {
  checkGuess();
}  
});

guessSubmit.addEventListener('click',function(){
  checkGuess();
});

  
function setGameOver(){
  guessField.diabled = true;
  guessSubmit.disabled = true;
  resetbutton = document.createElement('button');
  resetbutton.style.backgroundColor = 'white';
  resetbutton.style.border = ' rgb(137, 255, 122) 2px solid';
  resetbutton.style.borderRadius = '10px';
  resetbutton.style.fontSize = '1.3em';
  resetbutton.textContent = 'Start new game';
  document.body.appendChild(resetbutton);
  resetbutton.addEventListener('click', resetGame)

  

}
function resetGame(){
  guessCount = 1;

  const resetParas  = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < resetParas.length ;i++){
    resetParas[i].textContent = ' ';
  }

  resetbutton.parentNode.removeChild(resetbutton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = ' ';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) +1;
  }







