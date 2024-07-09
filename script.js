let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapNumber = 1;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsList = document.getElementById('laps');

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(getShowTime, 10);
        startStopBtn.innerHTML = "Pause";
        running = true;
    } else {
        clearInterval(tInterval);
        startStopBtn.innerHTML = "Start";
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    startTime = 0;
    updatedTime = 0;
    difference = 0;
    running = false;
    startStopBtn.innerHTML = "Start";
    minutesDisplay.innerHTML = "00";
    secondsDisplay.innerHTML = "00";
    millisecondsDisplay.innerHTML = "00";
    lapsList.innerHTML = "";
    lapNumber = 1;
}

function lap() {
    if (running) {
        const lapTime = `${minutesDisplay.innerHTML}:${secondsDisplay.innerHTML}:${millisecondsDisplay.innerHTML}`;
