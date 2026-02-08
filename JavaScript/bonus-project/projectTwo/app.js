const input = document.getElementById("seconds");
const btn = document.querySelector("button");
const display = document.querySelector(".display");

let intervalId = null;
let timeLeft = 0;
let isRunning = false;

const timerFunction = () => {
  if (!isRunning) {
    if (timeLeft === 0) {
      if (input.value === "") {
        alert("Please enter time in seconds");
        return;
      }
      timeLeft = Number(input.value);
    }

    isRunning = true;
    btn.textContent = "Stop Countdown";

    intervalId = setInterval(() => {
      display.textContent = `Time remaining: ${timeLeft}s`;
      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(intervalId);
        display.textContent = "Timer up ⏰!";
        btn.textContent = "Start Countdown";
        input.value = "";
        timeLeft = 0;
        isRunning = false;
      }
    }, 1000);
  } else {
    // STOP / PAUSE
    clearInterval(intervalId);
    isRunning = false;
    btn.textContent = "Resume Countdown";
  }
};

btn.addEventListener("click", timerFunction);
