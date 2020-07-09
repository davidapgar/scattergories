class CountDown {
  constructor(amount, timer, onDone) {
    this.initialCount = amount;
    this.count = amount;
    this.intervalID = null;
    this.timer = timer;
    this.onDone = onDone;
  }

  get running() {
    return (this.intervalID !== null);
  }

  start() {
    let _this = this;
    this.intervalID = window.setInterval(
      function() {
        _this.tick();
      },
      1000,
      this);
  }

  stop() {
    if (!this.running) {
      return;
    }

    window.clearInterval(this.intervalID);
    this.intervalID = null;
  }

  reset() {
    this.stop();
    this.count = this.initialCount;
    this.display();
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
    this.timer.textContent = this.count;
  }
}

export { CountDown };
