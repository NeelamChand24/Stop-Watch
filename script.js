let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');
let lapList = document.getElementById('lapList');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

startBtn.addEventListener('click', function () {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener('click', function () {
  timer = false;
});

resetBtn.addEventListener('click', function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  updateDisplay();
  lapList.innerHTML = '';
});

lapBtn.addEventListener('click', function () {
  if (timer) {
    let lapTime = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}:${formatTime(count)}`;
    let lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
  }
});

function stopWatch() {
  if (timer) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    updateDisplay();
    setTimeout(stopWatch, 10);
  }
}

function updateDisplay() {
  document.getElementById('hr').textContent = formatTime(hour);
  document.getElementById('min').textContent = formatTime(minute);
  document.getElementById('sec').textContent = formatTime(second);
  document.getElementById('count').textContent = formatTime(count);
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}