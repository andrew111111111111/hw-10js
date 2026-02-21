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
  operate(10, 5, (a, b) => {
    return a - b;
  }),
); // Віднімання
console.log(
  operate(10, 5, (a, b) => {
    return a + b;
  }),
); // Додавання
console.log(
  operate(10, 5, (a, b) => {
    return a * b;
  }),
); // Множення
console.log(
  operate(10, 5, (a, b) => {
    return a / b;
  }),
);

console.log(operate(operate));
