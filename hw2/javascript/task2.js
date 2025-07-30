//З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей
//не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються
//гроші, то пропонуємо купити лотерею за 4 грн.

const productPrice = parseFloat(prompt(`ціна товару`));
const moneyAmount = parseFloat(prompt('кількість грошей'));
const moneyDifference = moneyAmount-productPrice;
console.log(moneyDifference)
let message

if(moneyDifference<0){
  message = 'В покупці відмовлено! не вистачає кошт.'
}
else if(moneyDifference<4){
  message = 'Оплата пройшла успішно.'
}else{
  message = 'Оплата пройшла успішно. Xочете купити лотерею за 4грн?'
}

document.write(`
    <p>${message}</p>
  `)