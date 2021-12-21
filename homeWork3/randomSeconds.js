"use strict";

// Задача номер 3

const btn3 = document.querySelector(".btn3");

function textAtRandomInterval(func) {
    let intervalSwitch = false;

    let id;

    return function swicthInterval() {
        intervalSwitch = !intervalSwitch;

        const a = function () {
            if (!intervalSwitch) {
                clearTimeout(id);
                return;
            }
            let interval = Math.floor(Math.random() * 4) + 1;
            id = setTimeout(() => {
                func(interval);
                a();
            }, interval * 1000);
        };

        a();
    };
}

btn3.addEventListener("click", textAtRandomInterval(randomSeconds));

function randomSeconds(seconds) {
    console.log(`${seconds} seconds`);
}
