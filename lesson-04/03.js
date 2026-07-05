/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/



function findUniqueElements(array) {
    let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!includesElement(result, array[i])) {
        result.push(array[i]);
    }
}
return result;
}

console.log(findUniqueElements([1, 2, 3, 2, 1, 4]));












































/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function includesElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
}

console.log(includesElement([1, 2, 3], 2));



function findCommonElements(array1, array2) {
  let newMass = []
  for (let i = 0; i < array2.length; i++) {
    if (includesElement(array1, array2[i])) {
      newMass.push(array2[i])
    }
  }
  return newMass
}

console.log(findCommonElements([1, 2, 3], [2, 3, 4]));
