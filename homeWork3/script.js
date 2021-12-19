"use strict";
// Задача номер 1

const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", Timeout5sec);

function Timeout5sec() {
  setTimeout(() => {
    console.log("Hello world");
    btn1.addEventListener("click", Timeout5sec);
  }, 5000);
  btn1.removeEventListener("click", Timeout5sec);
}

// Задача номер 2

const btn2 = document.querySelector(".btn2");
let intervalSwitch = true;
let IntervalID;

btn2.addEventListener("click", () => {
  intervalSwitch ? setInterval3secOn() : setInterval3secOff();
  intervalSwitch = !intervalSwitch;
});

function setInterval3secOn() {
  IntervalID = setInterval(() => {
    console.log("You are welcome");
  }, 3000);
}

function setInterval3secOff() {
  clearInterval(IntervalID);
}

// Задача номер 3

const btn3 = document.querySelector(".btn3");

let intervalSwitch = true;
let timeoutID;

btn3.addEventListener("click", () => {
  intervalSwitch ? setTimeoutOn() : setTimeoutOff();
  intervalSwitch = !intervalSwitch;
});

function getRandomInt() {
  return Math.floor(Math.random() * 4) + 1;
}

function setTimeoutOn() {
  const delay = getRandomInt();
  timeoutID = setTimeout(() => {
    console.log(`${delay} seconds`);
    if (!intervalSwitch) setTimeoutOn();
  }, delay * 1000);
}

function setTimeoutOff() {
  clearTimeout(timeoutID);
}

// Задача номер 4

const input = document.querySelector(".input");
let timeoutID;

input.addEventListener("input", (e) => {
  clearTimeout(timeoutID);
  timeoutID = setTimeout(() => {
    console.log(e.target.value);
  }, 1000);
});
