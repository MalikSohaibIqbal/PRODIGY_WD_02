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
