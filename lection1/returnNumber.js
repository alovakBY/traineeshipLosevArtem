"use strict";

function returnNumber(arr) {
  const hash = arr.reduce((acc, el) => {
    !acc[el] ? (acc[el] = 1) : acc[el]++;
    return acc;
  }, {});
  const newArr = Object.keys(hash).reduce(
    ([key, value], el) => {
      if (hash[el] > value) {
        key = el;
        value = hash[el];
      } else if (hash[el] === value) {
        key = Math.max(+el, key);
        value = hash[el];
      }
      return [+key, value];
    },
    [0, 0]
  );
  return newArr[0];
}

console.log(returnNumber([1, 1, 1, 2, 2, 2, 2, 3, 4]));
