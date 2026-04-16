let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');

  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;

  seconds = 0;
  minutes = 0;
  hours = 0;

  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  let lapTime = document.getElementById("display").innerText;

  let li = document.createElement("li");
  li.innerText = lapTime;

  document.getElementById("laps").appendChild(li);
}
document.addEventListener("keydown", (e) => {
  if (e.key === "s") start();
  if (e.key === "p") pause();
  if (e.key === "r") reset();
  if (e.key === "l") lap();
});
let lapCount = 1;

function lap() {
  let lapTime = document.getElementById("display").innerText;

  let li = document.createElement("li");
  li.innerText = `Lap ${lapCount++} - ${lapTime}`;

  document.getElementById("laps").appendChild(li);
}