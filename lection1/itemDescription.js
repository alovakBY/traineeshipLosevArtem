"use strict";

// получить описание элемента в массиве.

const arr = [1, "hello", true];

function itemDiscription(arr) {
  return arr.map((element, index) => ({
    elementItem: element,
    elementType: typeof element,
    elementIndex: index,
  }));
}

console.log(itemDiscription(arr));

// на выходе должны получить массив с объектами : [{
//       elementValue: 1,
//       elementType: "number",
//       elementIndex: 0
// },
// {
//       elementValue: "hello",
//       elementType: "string",
//       elementIndex: 1
// }];
