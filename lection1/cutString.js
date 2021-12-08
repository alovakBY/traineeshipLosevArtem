"use strict";

function cutString(str, num) {
  return `${str.substring(0, num)}...`;
}

console.log(cutString("Hello", 3));
