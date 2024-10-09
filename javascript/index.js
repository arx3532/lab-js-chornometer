import {Chronometer} from './chronometer.js';

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let min = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = min[0];
  minUniElement.innerHTML = min[1];
}

function printSeconds() {
  let sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElementDecElement.innerHTML = sec[0];
  secUniElementUniElement.innerHTML = sec[1];
}

// ==> BONUS
function printMilliseconds() {
  let millisec = chronometer.computeTwoDigitNumber(printSeconds() % 1000);
  milDecElement.innerHTML = millisec[0];
  milUniElement = millisec[1];
}

function printSplit() {
  let split = chronometer.split();
  let li = document.createElement('li');
  li.className = 'list-item';
  li.innerHTML = split;
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.className='btn stop';
  btnLeftElement.textContent= 'STOP'
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.textContent = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.textContent = 'START';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.textContent = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')){
    chronometer.start(printTime)
    setStopBtn();
    setSplitBtn();
  }
  else{
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')){
    printSplit();
    setSplitBtn();
  }
  else{
    clearSplits();
  
  }

});
