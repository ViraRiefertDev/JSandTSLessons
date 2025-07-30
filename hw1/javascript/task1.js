//Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
const number1 = parseFloat(prompt('Введіть перше дійсне число:', 0))
const number2 = parseFloat(prompt('Введіть друге дійсне число: ', 1))

const sum = number1+number2;
const product = number1*number2;
const quotient = number1/number2;

document.write(`
  <p>1 число:<strong> ${number1}</strong>. 2 число: <strong>${number2}</strong></p>
   <table border="1" cellpadding="8">
    <tr><th>Операція</th><th>Результат</th></tr>
    <tr><td>Сума</td><td>${sum.toFixed(2)}</td></tr>
    <tr><td>Добуток</td><td>${product.toFixed(2)}</td></tr>
    <tr><td>Частка</td><td>${quotient.toFixed(2)}</td></tr>
  </table>
  `)