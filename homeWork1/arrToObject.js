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

function arrToObject(arrVideos) {
  return arrVideos.reduce((object, video) => {
    object[video.id] = video.title;
    return object;
  }, {});
}

console.log(arrToObject(videos));

// Ожидаемый результат...
//     {
//         "65432445": "The Chamber",
//         "675465": "Fracture",
//         "70111470": "Die Hard",
//         "654356453": "Bad Boys"
//     }
