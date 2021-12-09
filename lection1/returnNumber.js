"use strict";

function returnNumber(arrNumbers) {
  // Делаем объект чисел, с количестовм повторений
  const objectRepeatNumbers = arrNumbers.reduce((object, number) => {
    !object[number] ? (object[number] = 1) : object[number]++;
    return object;
  }, {});

  // Находим все числа, которые повторяются максимальное количество раз
  const arrMaxRepeatNumbers = Object.keys(objectRepeatNumbers).reduce(
    (acc, el) => {
      if (
        objectRepeatNumbers[el] ===
        Math.max(...Object.values(objectRepeatNumbers))
      )
        acc.push(+el);
      return acc;
    },
    []
  );

  // Возвращаем большее число из максимально повторяющихся чисел.
  return Math.max(...arrMaxRepeatNumbers);
}

console.log(returnNumber([1, 1, 1, 1, 2, 2, 2, 2, 3, 4]));
