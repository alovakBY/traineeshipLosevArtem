"use strict";

// Задача номер 2

const btn2 = document.querySelector(".btn2");
let intervalSwitch = true;
let IntervalID;

btn2.addEventListener("click", () => {
  intervalSwitch ? youAreWelcomeOn() : youAreWelcomeOff();
  intervalSwitch = !intervalSwitch;
});

function youAreWelcomeOn() {
  IntervalID = setInterval(() => {
    console.log("You are welcome");
  }, 3000);
}

function youAreWelcomeOff() {
  clearInterval(IntervalID);
}
