import * as Data from './categories.js';
import { CountDown } from './count_down.js';

const gameTimer = document.getElementById('gameTimer');
const gameTimerReset = document.querySelector('.game-timer-reset')
const resetButton = document.querySelector('.reset');
const nextButton = document.querySelector('.next');
const gameLetter = document.querySelector('.game-letter');
const gameLetterReset = document.querySelector('.game-letter-reset');
const gameLetterNext = document.querySelector('.game-letter-next');

/* Fisher-Yates shuffle
   https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
Array.prototype.shuffle = function() {
  var result = this;
  var j, x, i;
  for (i = this.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = result[i];
    result[i] = result[j];
    result[j] = x;
  }
  return result;
}

var lists = Data.lists.shuffle();
var letters = Data.letters.shuffle();

let countDown = new CountDown(120, gameTimer, function() {
  alert("Done!");
});
countDown.display();

function selectLetter() {
  let letter = letters.shift();
  gameLetter.textContent = letter;
}

function selectList() {
  let list = lists.shift();
  for (let i = 0; i < list.length; i++) {
    let category = document.querySelector(`#category-${i+1}`);
    category.textContent = list[i];
  }
}

function reset() {
  countDown.stop();
  countDown.reset();
  countDown.display();

  letters = Data.letters.shuffle();
  lists = Data.lists.shuffle();

  cover();
  selectList();
  selectLetter();
}

function next() {
  countDown.reset();
  cover();
  selectList();
  selectLetter();
}

function setCover(visible) {
  for (let i = 0; i < 12; i++) {
    let cover = document.querySelector(`#category-${i+1}-cover`);
    if (cover) {
      cover.hidden = visible;
    }
  }
}

function uncover() {
  setCover(true);
}

function cover() {
  setCover(false);
}

gameTimer.onclick = function() {
  countDown.event();
  uncover() ;
}

resetButton.onclick = reset;
nextButton.onclick = next;
gameLetterReset.onclick = selectLetter;
gameTimerReset.onclick = function() { countDown.reset(); }
gameLetterNext.onclick = function() {
  selectLetter();
  countDown.reset();
  countDown.start();
}

reset();
