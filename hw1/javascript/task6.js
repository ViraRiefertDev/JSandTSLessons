// З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
// Обчислити вартість кожного товару окремо та загальну вартість. 
// Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

const costOfGoods1 = parseFloat(prompt('Введіть вартість першого товару', '3.99'))
const quantityOfGood1 = parseInt(prompt('Введіть кількість першого товару', '1'))
const costOfGoods2 = parseFloat(prompt('Введіть вартість другого товару', '2.8'))
const quantityOfGood2 = parseInt(prompt('Введіть кількість другого товару', '1'))
const costOfGoods3 = parseFloat(prompt('Введіть вартість третього товару', '1.99'))
const quantityOfGood3 = parseInt(prompt('Введіть кількість третього товару', '1'))

const totalCostGood1 = costOfGoods1 * quantityOfGood1;
const totalCostGood2 = costOfGoods2 * quantityOfGood2;
const totalCostGood3 = costOfGoods3 * quantityOfGood3;

const totalSum = totalCostGood1 + totalCostGood2 + totalCostGood3;

document.write(`
  <pre>
                КВИТАНЦІЯ

${quantityOfGood1} x Товар 1  ${costOfGoods1.toFixed(2)} грн         ${totalCostGood1.toFixed(2)} грн
${quantityOfGood2} x Товар 2  ${costOfGoods2.toFixed(2)} грн         ${totalCostGood2.toFixed(2)} грн
${quantityOfGood3} x Товар 3  ${costOfGoods3.toFixed(2)} грн         ${totalCostGood3.toFixed(2)} грн

Разом                        ${totalSum.toFixed(2)} грн

  </pre>
`)