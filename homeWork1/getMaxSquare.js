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

function getMaxSquare(arrBoxarts) {
  const objectMaxSquareBox = arrBoxarts.reduce((object, box) => {
    if (Object.keys(object).length === 0) object = box;
    if (object.width * object.height < box.width * box.height) object = box;
    return object;
  }, {});

  return objectMaxSquareBox.url;
}

console.log(getMaxSquare(boxarts));
