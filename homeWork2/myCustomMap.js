"use strict";

const array = [1, 2, 3];

function myCustomMap(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const newElment = callback(this[i], i, this);
    newArray.push(newElment);
  }

  return newArray;
}

Array.prototype.myCustomMap = myCustomMap;

const arrayAfterMap = array.myCustomMap((e) => e * 2);

console.log(arrayAfterMap);
