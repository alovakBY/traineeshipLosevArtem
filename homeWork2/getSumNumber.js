"use strict";

function getSumNumber(number) {
  if (number / 10 < 1) return number;
  const sum = `${number}`
    .split("")
    .reduce((result, number) => +result + +number);
  return getSumNumber(sum);
}

console.log(getSumNumber(16));
console.log(getSumNumber(942));
