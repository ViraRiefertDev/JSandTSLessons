"use strict";
// Задача 7. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад 
// з додавання двох цифр і робиться перевірка
if (confirm('Почати тестування?')) {
    function getRandomNumber() {
        return Math.floor(1 + Math.random() * 100);
    }
    function getDelayedAdditionTask(ms) {
        setTimeout(() => {
            const firstNumber = getRandomNumber();
            const secondNumber = getRandomNumber();
            const sum = firstNumber + secondNumber;
            const row = prompt(`${firstNumber} + ${secondNumber}=`);
            if (row === null) {
                alert('Гру прервано!');
                return;
            }
            const userAnswer = parseInt(row);
            if (userAnswer === sum) {
                alert(`Вірно ${firstNumber} + ${secondNumber}=${userAnswer}`);
            }
            else {
                alert(`Не вірно ${firstNumber} + ${secondNumber}=${sum}`);
            }
            getDelayedAdditionTask(ms);
        }, ms);
    }
    getDelayedAdditionTask(10000);
}
