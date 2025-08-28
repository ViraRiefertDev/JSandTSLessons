// Задача 2. Створити 10 елементів для введення цін продуктів.

if (confirm('Почати тестування?')) {
  const COUNT_OF_INPUTS = 10

  for(let i = 1; i<=COUNT_OF_INPUTS; i++){
    document.write(`Product#${i} <input name="product${i}"><br/>`)
  }
}