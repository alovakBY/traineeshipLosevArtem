"use strict";

function getValue(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
}

getValue("Hello 2000", 2000).then((data) => {
  console.log(data);
});
getValue("Hello 5000", 5000).then((data) => {
  console.log(data);
});
