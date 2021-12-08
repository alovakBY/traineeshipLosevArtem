"use strict";

// 4. С помощью функций map, reduce, вывести url у которого самая большая площадь

const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

function getMaxSquare(arr) {
  const hashMaxSquare = arr.reduce((acc, el) => {
    if (!acc.width) acc = el;
    if (acc.width * acc.height < el.width * el.height) acc = el;
    return acc;
  }, {});

  return hashMaxSquare.url;
}

console.log(getMaxSquare(boxarts));
