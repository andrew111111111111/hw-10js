// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки
const processArray = (array, callback) => {
  return callback(array);
};
// const getSum = function (arr) {
//   return arr.reduce((acc, curr) => acc + curr);
// };
const getSum = (arr) => arr.reduce((acc, curr) => acc + curr);

// const getMin = function (arr) {
//   return Math.min(...arr);
// };
const getMin = (arr) => {
  return Math.min(...arr);
};

// const getMax = function (arr) {
//   return Math.max(...arr);
// };

const getMax = (arr) => {
  return Math.max(...arr);
};

console.log(processArray([1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2, 9], getSum));
console.log(processArray([1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2, 9], getMin));
console.log(processArray([1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2, 9], getMax));

// Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:
// Додавання.
// Віднімання.
// Множення.
// Ділення.
// Перепишіть колбеки на стрілкові функції
const operate = (a, b, callback) => {
  return callback(a, b);
};

// Виклик функції з різними операціями
console.log(
  operate(10, 5, function (a, b) {
    return a - b;
  }),
); // Віднімання
console.log(
  operate(10, 5, function (a, b) {
    return a + b;
  }),
); // Додавання
console.log(
  operate(10, 5, function (a, b) {
    return a * b;
  }),
); // Множення
console.log(
  operate(10, 5, function (a, b) {
    return a / b;
  }),
);

console.log(operate(operate));
