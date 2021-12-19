"use strict";

// Задача номер 3

const btn3 = document.querySelector(".btn3");

let interval = true;
let timeoutID;

btn3.addEventListener("click", () => {
  interval ? setTimeoutOn() : setTimeoutOff();
  interval = !interval;
});

function getRandomInt() {
  return Math.floor(Math.random() * 4) + 1;
}

function setTimeoutOn() {
  const delay = getRandomInt();
  timeoutID = setTimeout(() => {
    console.log(`${delay} seconds`);
    if (!interval) setTimeoutOn();
  }, delay * 1000);
}

function setTimeoutOff() {
  clearTimeout(timeoutID);
}
