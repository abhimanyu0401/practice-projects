let time = 0;
let id = null;
let lapCount = 1;

const display = document.getElementById("display");
const laps = document.querySelector(".laps");

function formatTime() {
    let mins = Math.floor(time / 6000);
    let secs =  Math.floor((time % 6000)/100);
    let millisec =  time % 100;

    return `${mins}:${secs.toString().padStart(2, "0")}.${millisec.toString().padStart(2,"0")}`;
}

function updateDisplay() {
    display.innerText = formatTime();
}

function start() {
    if (id) return;

    id = setInterval(() => {
        time++;
        updateDisplay();
    }, 10);
}

function addLap() {
    const li = document.createElement("li");

    li.innerText = `Lap ${lapCount}: ${formatTime()}`;

    laps.append(li);

    lapCount++;
}

function lap() {
    if (!id) return;

    addLap();
}

function stop() {
    if (!id) return;

    addLap();

    clearInterval(id);
    id = null;
}

function reset() {
    clearInterval(id);

    id = null;
    time = 0;
    lapCount = 1;

    display.innerText = "0:00.00";

    laps.innerHTML = "";
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("lap").addEventListener("click", lap);
document.getElementById("reset").addEventListener("click", reset);