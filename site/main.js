console.log('hello world');
const gameTimer = document.getElementById('gameTimer');

class CountDown {
  constructor(amount, onDone) {
    this.initialCount = amount;
    this.count = amount;
    this.intervalID = null;
    this.onDone = onDone;
  }

  get running() {
    return (this.intervalID !== null);
  }

  start() {
    this.intervalID = window.setInterval(timeTick, 1000, this);
  }

  stop() {
    if (!this.running) {
      return;
    }

    window.clearInterval(this.intervalID);
    this.intervalID = null;
  }

  reset() {
    this.count = initialCount;
  }

  event() {
    if (this.running) {
      this.stop();
    } else {
      this.start();
    }
  }

  tick() {
    if (this.running) {
      this.count -= 1;
    }

    this.display();

    if (this.count <= 0) {
      this.stop();
      this.onDone();
    }
  }

  display() {
    gameTimer.textContent = this.count;
  }
}

function timeTick(countDown) {
  countDown.tick();
}

let countDown = new CountDown(3, function() {
  alert("Done!");
});
countDown.display();

gameTimer.onclick = function() {
  countDown.event();
}
