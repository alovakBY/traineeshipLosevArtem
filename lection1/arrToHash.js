"use strict";

// 2.Преобразуйте массив в объект используя функцию reduce.

const videos = [
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
  {
    id: 70111470,
    title: "Die Hard",
  },
  {
    id: 654356453,
    title: "Bad Boys",
  },
];

function arrToHash(arr) {
  return arr.reduce((acc, el) => {
    acc[el.id] = el.title;
    return acc;
  }, {});
}

console.log(arrToHash(videos));

// Ожидаемый результат...
//     {
//         "65432445": "The Chamber",
//         "675465": "Fracture",
//         "70111470": "Die Hard",
//         "654356453": "Bad Boys"
//     }
