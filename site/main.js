import * as Data from './categories.js';
import { CountDown } from './count_down.js';

const gameTimer = document.getElementById('gameTimer');
const gameTimerReset = document.querySelector('.game-timer-reset')
const resetButton = document.querySelector('.reset');
const gameLetter = document.querySelector('.game-letter');
const gameLetterReset = document.querySelector('.game-letter-reset');

let countDown = new CountDown(120, gameTimer, function() {
  alert("Done!");
});
countDown.display();

gameTimer.onclick = function() {
  countDown.event();
}

function resetLetter() {
  let letterIdx = Math.floor(Math.random() * Data.letters.length);
  let letter = Data.letters[letterIdx];
  gameLetter.textContent = letter;
}

function reset() {
  countDown.stop();
  countDown.reset();
  countDown.display();

  let listIdx = Math.floor(Math.random() * Data.lists.length);
  let list = Data.lists[listIdx];
  for (let i = 0; i < list.length; i++) {
    let category = document.querySelector(`#category-${i+1}`);
    category.textContent = list[i];
  }

  resetLetter();
}

resetButton.onclick = reset;
gameLetterReset.onclick = resetLetter;
gameTimerReset.onclick = function() { countDown.reset(); }

reset();
