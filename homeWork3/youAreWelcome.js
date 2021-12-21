"use strict";

// Задача номер 2

const btn2 = document.querySelector(".btn2");

function textAtInterval(func, interval) {
    let intervalSwitch = true;
    let id;
    return function () {
        if (!intervalSwitch) {
            clearInterval(id);
            intervalSwitch = true;
            return;
        }
        id = setInterval(func, interval);
        intervalSwitch = false;
    };
}
btn2.addEventListener("click", textAtInterval(youAreWelcome, 3000));

function youAreWelcome() {
    console.log("You are welcome");
}
