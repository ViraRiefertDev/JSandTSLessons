"use strict";
// Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, 
// а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і 
// максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)
if (confirm('Почати тестування?')) {
    const obj1 = {
        numArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        getSum: function () {
            const sum = this.numArr.reduce((prevSum, num) => prevSum + num, 0);
            return sum;
        }
    };
    const obj2 = {
        numArr: [11, 22, 33, 44, 55, 66, 77, 88, 99, 100],
        getProductBetweenMinAndMax: function (minValue, maxValue) {
            const product = this.numArr.filter((num) => num > minValue && num < maxValue).reduce((prevProduct, num) => prevProduct * num, 1);
            return product;
        }
    };
    const MIN_OBJ1 = 5;
    const MAX_OBJ1 = 8;
    const MIN_OBJ2 = 11;
    const MAX_OBJ2 = 44;
    const sumForObj1 = obj1.getSum();
    const productForObj1 = obj2.getProductBetweenMinAndMax.apply(obj1, [MIN_OBJ1, MAX_OBJ1]);
    const sumForObj2 = obj1.getSum.call(obj2);
    const productForObj2 = obj2.getProductBetweenMinAndMax(MIN_OBJ2, MAX_OBJ2);
    document.write(`
    <h2>Об'єкт 1 з функцією знаходження суми</h2>
    <p>Сума елементів масиву= ${sumForObj1}</p>
    <p>Добуток елементів масиву:  ${productForObj1}</p>
    <hr/>
    <h2>Об'єкт 2 з функцією знаходження добутку</h2>
    <p>Сума елементів масиву= ${sumForObj2}</p>
    <p>Добуток елементів масиву:  ${productForObj2}</p>
    `);
}
