'use strict';
let current = 0;
let activePlayer = 0;
let scores = [0,0];
const dice = document.querySelector('.dice');
document.querySelector('.btn--new').addEventListener('click' ,function () {
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#score--0').textContent = 0;
  dice.classList.add('hidden');
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
});
document.querySelector('.btn--roll').addEventListener('click', function() {
  let roll = Math.ceil(Math.random()*6);
  dice.classList.remove('hidden');
  console.log(roll);
  dice.src = `dice-${roll}.png`;
  if(roll !== 1){
    current += roll;
    document.getElementById(`current--${activePlayer}`).textContent = current;
  }else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    current = 0;
  }
  if(activePlayer === 0){
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
  }
  if(activePlayer === 1){
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
  }
});
document.querySelector('.btn--hold').addEventListener('click', function() {
  scores[activePlayer] += current;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  current = 0;
  if(activePlayer === 0){
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
  }
  if(activePlayer === 1){
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
  }
});
