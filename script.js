const timerDisplay = document.getElementById("timer-display");
const startStopButton = document.getElementById("start-stop-button");
const resetButton = document.getElementById("reset-button");

let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;
let intervalId = null;

function startTimer() {
  isRunning = true;
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    timerDisplay.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

function stopTimer() {
  isRunning = false;
  clearInterval(intervalId);
}

function resetTimer() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerDisplay.innerHTML = "00:00:00";
}

startStopButton.addEventListener("click", () => {
  if (isRunning) {
    stopTimer();
    startStopButton.innerHTML = "Start";
  } else {
    startTimer();
    startStopButton.innerHTML = "Stop";
  }
});

resetButton.addEventListener("click", () => {
  resetTimer();
  if (isRunning) {
    startStopButton.innerHTML = "Stop";
  } else {
    startStopButton.innerHTML = "Start";
  }
});