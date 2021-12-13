"use strict";

function returnUniqueNumbers(arrOfNumbers) {
  const set = arrOfNumbers.reduce((setUniqueOfNumbers, number) => {
    setUniqueOfNumbers.add(number);
    return setUniqueOfNumbers;
  }, new Set());
  return [...set];
}

console.log(returnUniqueNumbers([1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 6])); // [1,2,3,4,5,6]
