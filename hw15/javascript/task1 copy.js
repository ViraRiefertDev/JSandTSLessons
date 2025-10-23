"use strict";
//  Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Поля(властивості)
// Масив, у якому зберігається поле з зайцями
// Методи (дії)
// Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля
if (confirm('Почати тестування?')) {
    const shootingRange = {
        rabbitSquares: [1, 0, 0, 1, 1, 0, 0, 0],
        makeShoot: function (shootSquare) {
            if (this.rabbitSquares[shootSquare - 1] === 1) {
                document.write(`Ура! Ви попали у зайця<br>`);
                this.rabbitSquares[shootSquare - 1] = 0;
            }
            else {
                document.write(`Упс промах :(<br>`);
            }
        },
        getShootingRange: function () {
            document.write(this.rabbitSquares.toString() + `<br>`);
        }
    };
    shootingRange.getShootingRange();
    shootingRange.makeShoot(4);
    shootingRange.makeShoot(1);
    shootingRange.makeShoot(2);
    shootingRange.getShootingRange();
}
