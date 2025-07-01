var hours = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
var timer = null;

function updateDisplay() {
  var h = String(hours).padStart(2, "0");
  var m = String(minutes).padStart(2, "0");
  var s = String(seconds).padStart(2, "0");
  var ms = String(milliSeconds).padStart(2, "0");
  document.getElementById("display").textContent = `${h}:${m}:${s}:${ms}`;
}

function start() {
  if (timer !== null) return;
  timer = setInterval(() => {
    milliSeconds++;
    if (milliSeconds === 100) {
      milliSeconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 10);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliSeconds = 0;
  updateDisplay();
}
