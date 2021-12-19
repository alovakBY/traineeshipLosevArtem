"use strict";

// Задача номер 4

const input = document.querySelector(".input");
let idTimeout;

input.addEventListener("input", (e) => {
  clearTimeout(idTimeout);
  idTimeout = setTimeout(() => {
    console.log(e.target.value);
  }, 1000);
});
