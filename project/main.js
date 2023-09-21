const time = document.getElementById('time'); 
const startBtn = document.getElementById('start'); 
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset'); 

let startTime;
let stopTime = 0;
let timeoutID;

function displayTime(){
  const currentTime = (Date.now() - startTime + stopTime);
  const m = Math.floor(currentTime / 60000);
  const s1 = Math.floor(currentTime % 60000 / 10000);
  const s2 = (Math.floor(currentTime % 60000 / 1000) - s1 * 10);
  const ms = Math.floor(currentTime % 1000 / 100);
  
  time.textContent = m + ':' + s1 + ':' + s2 + ':' + ms;
  timeoutID = setTimeout (displayTime,100);
}

function start(){
  startTime = Date.now();
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
  displayTime();
}

function stop(){
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
}

function reset(){
  clearTimeout(timeoutID);
  time.textContent ='0:0:0:0';
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  stopTime = 0;
}

if (time.textContent === '0:0:0:0'){
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}
