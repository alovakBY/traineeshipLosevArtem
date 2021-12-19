"use strict";

function returnUniqueNumbers(arrOfNumbers) {
  return arrOfNumbers.reduce((arrUniqueOfNumbers, number) => {
    if (!arrUniqueOfNumbers.find((uniqueNumber) => uniqueNumber === number)) {
      arrUniqueOfNumbers = [...arrUniqueOfNumbers, number];
    }

    return arrUniqueOfNumbers;
  }, []);
}

console.log(returnUniqueNumbers([1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 6])); // [1,2,3,4,5,6]
