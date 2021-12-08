"use strict";

// получить описание элемента в массиве.

const arr = [1, "hello", true];

function itemDiscription(arr) {
  return arr.reduce((acc, el, i) => {
    acc.push({
      elementItem: el,
      elementType: typeof el,
      elementIndex: i,
    });
    return acc;
  }, []);
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
