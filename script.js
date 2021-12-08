// 1. Функция принимает массив пользователей. Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: female и male. Данные
//   поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно.
//   Также, вместо двух полей first_name и last_name у каждого из объектов должно быть поле fullName в котором будут объеденины убранные поля
// (first_name и last_name). Количество пользователей может быть не ограничено.

const users = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "male",
    ip_address: "229.179.4.212",
  },
];

function getGenderHash(arr) {
  return arr.reduce((acc, el, i) => {
    if (i === 0) {
      acc.women = [];
      acc.men = [];
    }
    if (el.gender === "female") {
      const hash = {
        id: el.id,
        fullName: `${el.first_name} ${el.last_name}`,
        email: el.email,
        gender: el.gender,
        ipAdress: el.ip_address,
      };
      acc.women.push(hash);
    } else {
      acc.men.push({
        id: el.id,
        fullName: `${el.first_name} ${el.last_name}`,
        email: el.email,
        gender: el.gender,
        ipAdress: el.ip_address,
      });
    }
    return acc;
  }, {});
}

console.log(getGenderHash(users));

/* Пример результата выполнения:
{
  women: [
    {
      id: 1,
      fullName: 'Jeanette Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female',
      ipAddress: '26.58.193.2',
    }
  ],
  men: [
    {
      id: 2,
      fullName: 'Petr Jackson',
      email: 'gfrediani1@senate.gov',
      gender: 'Male',
      ip_address: '229.179.4.212',
    }
  ]
}
 */

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

// 3. Выведите массив ids для релизов у которых рейтинг 5.0.
// Исходные данные

const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

function getIds(arr) {
  return arr.reduce((acc, el) => {
    if (el.rating[0] === 5.0) acc.push(el.id);
    return acc;
  }, []);
}

console.log(getIds(newReleases));

// [675465, …]

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
