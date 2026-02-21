// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

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

console.log(processArray(numbers, getSum));
console.log(processArray(words, getMin));
console.log(processArray(numbers, getMax));
