"use strict";

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
    const hash = {
      id: el.id,
      fullName: `${el.first_name} ${el.last_name}`,
      email: el.email,
      gender: el.gender,
      ipAdress: el.ip_address,
    };
    if (el.gender === "female") {
      acc.women.push(hash);
    } else {
      acc.men.push(hash);
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
