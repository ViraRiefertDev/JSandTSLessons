"use strict";
// Задача 2. Створити об’єкт «Авто». 
// Поля(властивості)
//    Марка
//    Розмір бака
//    Кількість наявних літрів
//    Кількість місць
//    Кількість пасажирів
// Методи (дії)
//    Заправка на вказану кількість літрів
//    Виведення кількості пасажирів
//    Додавання пасажирів
//    Висадка пасажирів
if (confirm('Почати тестування?')) {
    const car = {
        marka: 'Toyota',
        tankSize: 50,
        currentLiters: 25,
        seats: 5,
        passengers: 3,
        refuil: function (liters) {
            if (this.currentLiters + liters > this.tankSize) {
                document.write(`
          Забагато бензину, заповнено по максимуму, зайві ${this.currentLiters + liters - this.tankSize} літри повертаємо<br>
          `);
                this.currentLiters = this.tankSize;
            }
            else if (liters <= 0) {
                document.write(`Кількість літрів може бути тільки додатнє число<br/>`);
            }
            else {
                this.currentLiters += liters;
                document.write(`
          Заправка пройшла успішно<br/> `);
            }
            document.write(`Зараз у баці ${this.currentLiters} літрів<br/>`);
        },
        showPassengers: function () {
            document.write(`У авто зараз ${this.passengers} пасажирів <br/>`);
        },
        addPassengers: function (countOfPassengers) {
            if (countOfPassengers > this.seats - 1 - this.passengers) {
                document.write(`Для ${countOfPassengers} не достатньо місць<br/>
        
        `);
            }
            else if (countOfPassengers <= 0) {
                document.write(`Кількість пасажирів повинна бути > 0<br/>`);
            }
            else {
                this.passengers += countOfPassengers;
                document.write(`Пасажири успішно посаджені<br/>`);
            }
            this.showPassengers();
        },
        removePassengers: function (countOfPassengers) {
            if (countOfPassengers > this.passengers) {
                document.write(`
          Неможливо висадити ${countOfPassengers} пасажирів<br/>
          `);
            }
            else if (countOfPassengers <= 0) {
                document.write(`
          Кількість пасажирів повинна бути > 0<br/>
          `);
            }
            else {
                this.passengers -= countOfPassengers;
                document.write(`${countOfPassengers} пасажирів висаджені успішно<br/>`);
            }
            this.showPassengers();
        }
    };
    car.refuil(3);
    car.refuil(-23);
    car.refuil(100);
    car.showPassengers();
    document.write(`<hr/>`);
    car.addPassengers(5);
    car.addPassengers(0);
    car.addPassengers(1);
    document.write(`<hr/>`);
    car.removePassengers(5);
    car.removePassengers(-1);
    car.removePassengers(3);
}
