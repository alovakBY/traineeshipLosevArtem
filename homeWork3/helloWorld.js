"use strict";

// Задача номер 1

const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", helloWorld);

function helloWorld() {
  setTimeout(() => {
    console.log("Hello world");
    btn1.addEventListener("click", helloWorld);
  }, 5000);
  btn1.removeEventListener("click", helloWorld);
}
