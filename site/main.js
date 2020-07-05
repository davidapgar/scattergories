console.log('hello world');
const gameTimer = document.getElementById('gameTimer');

class CountDown {
  constructor() {
    this.count = 10;
    this.intervalID = null;
  }

  get running() {
    return (this.intervalID !== null);
  }

  start() {
    this.count = 10;
    this.intervalID = window.setInterval(timeTick, 1000);
  }
}

gameTimer.textContent = "111";
let countDown = new CountDown();
console.log("Is running? " + countDown.running);

function timeTick() {
  if (countDown.count <= 0 && countDown.running) {
    // Stop the timer.
    window.clearInterval(this.intervalID);
  } else {
    countDown.count -= 1;
    gameTimer.textContent = countDown.count;
  }
}

gameTimer.textContent = countDown.count;
countDown.start();
