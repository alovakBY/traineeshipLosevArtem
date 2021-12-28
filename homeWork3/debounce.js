// "use strict";

function debounce(func, delay) {
  let cooldown = false;
  let id;
  console.log(this);
  return function () {
    console.log(this);
    if (cooldown) {
      clearTimeout(id);
    }
    cooldown = true;
    id = setTimeout(() => {
      console.log(this);
      func.call(this);
      cooldown = false;
    }, delay);
  };
}

// Задача номер 1

const btn1 = document.querySelector(".btn1");

function helloWorld() {
  console.log("Hello world");
}

btn1.addEventListener("click", debounce(helloWorld, 1000));

// Задача номер 4

// const input = document.querySelector(".input");

// function getInputText() {
//   console.log(this.value);
// }

// input.addEventListener("input", debounce(getInputText, 1000));
