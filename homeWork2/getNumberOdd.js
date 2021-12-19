"use strict";

function getNumberOdd(arrOfNumbers) {
  const objOccurringNumbs = arrOfNumbers.reduce((result, number) => {
    result[number] = (result[number] || 0) + 1;
    return result;
  }, {});
  return Object.keys(objOccurringNumbs).find((key) => {
    return objOccurringNumbs[key] % 2 === 1;
  });
}

console.log(getNumberOdd([7]));
console.log(getNumberOdd([0]));
console.log(getNumberOdd([1, 1, 2]));
console.log(getNumberOdd([0, 1, 0, 1, 0]));
console.log(getNumberOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
