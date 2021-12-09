"use strict";

function cutString(text, availableChars) {
  if (text.length < availableChars) return text;
  return `${text.substring(0, availableChars)}...`;
}

console.log(cutString("Hello", 3));
