"use strict";

// Задача номер 1

const btn1 = document.querySelector(".btn1");
let idSetTimeout;

btn1.addEventListener("click", helloWorld);

function helloWorld() {
    clearTimeout(idSetTimeout);
    idSetTimeout = setTimeout(() => {
        console.log("Hello world");
        btn1.addEventListener("click", helloWorld);
    }, 5000);
}
