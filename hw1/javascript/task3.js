// Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ
// (5% від загальної вартості).

const VAT_RATE = 5;
const productPrice = parseFloat(prompt("Введіть вартість товару"));
const productQuantity = parseInt(prompt("Введіть кількість товару", 1));

const totalPrice = productPrice*productQuantity;
const vatAmount = totalPrice*VAT_RATE/100;
const totalPriceWithVat = totalPrice+vatAmount;

document.write(`
    <p>Вартість одниниці товару: ${productPrice.toFixed(2)} грн</p>
    <p>Кількість товару: ${productQuantity}</p>
    <p>Загальна вартість товару (без ПДВ): ${totalPrice.toFixed(2)} грн</p>
    <p>ПВД: ${vatAmount.toFixed(2)}грн</p>
    <p>Загальна вартість товару (з ПДВ): ${totalPriceWithVat.toFixed(2)} грн</p>
  `)
