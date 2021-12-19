"use strict";

const array = [1, 2, 3];

function myCustomFilter(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) newArray.push(this[i]);
  }

  return newArray;
}

Array.prototype.myCustomFilter = myCustomFilter;

const arrayAfterFilter = array.myCustomFilter((e) => e < 1);

console.log(arrayAfterFilter);
