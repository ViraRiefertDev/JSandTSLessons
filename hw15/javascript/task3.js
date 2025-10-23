"use strict";
// Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// Поля
//  Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
//  Кількість правильних відповідей
//  Кількість неправильних відповідей
// Методи
//  Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
//  Перевірка правильності вказаної відповіді
//  render - виведення інформації про тестування на екран
var _a, _b;
if (confirm('Почати тестування?')) {
    class MultChecker {
        constructor(numberForChecking) {
            this.number = numberForChecking;
            this.countOfCorrectAnswers = 0;
            this.countOfIncorrectAnswers = 0;
        }
        getRandomNumber() {
            return 1 + Math.floor(Math.random() * 10);
        }
        generateValues() {
            this.randomNumber = this.getRandomNumber();
        }
        generateExampleText() {
            return (`
      Приклад таблиці множення числа ${this.number}: \n
      ${this.number}*${this.randomNumber} = ?
      `);
        }
        generateExample() {
            this.generateValues();
            return this.generateExampleText();
        }
        isAnswerCorrect(userAnswer) {
            var _a;
            return userAnswer === this.number * ((_a = this.randomNumber) !== null && _a !== void 0 ? _a : 0);
        }
        updateState(correct) {
            if (correct)
                this.countOfCorrectAnswers++;
            else
                this.countOfIncorrectAnswers++;
        }
        formatCheckMessage(correct, rightAnswer) {
            if (correct)
                return `Правильно ${this.number}*${this.randomNumber} = ${userAnswer}`;
            return `НЕ правильно. Правильна відповідь ${this.number}*${this.randomNumber} =${rightAnswer}`;
        }
        getCheckMessage(userAnswer) {
            var _a;
            const correct = this.isAnswerCorrect(userAnswer);
            const rightAnswer = ((_a = this.randomNumber) !== null && _a !== void 0 ? _a : 0) * this.number;
            this.updateState(correct);
            return this.formatCheckMessage(correct, rightAnswer);
        }
        render() {
            document.write(`
        Кількість вірних відповідей: ${this.countOfCorrectAnswers}<br/>
        Кількість Не вірних відповідей: ${this.countOfIncorrectAnswers}<br/>
        `);
        }
    }
    let userAnswer = 0;
    const numberForChecking = parseInt((_a = prompt('Виберіть цифру на яку будемо перевіряти таблицю множення')) !== null && _a !== void 0 ? _a : 'exit');
    if (!isNaN(numberForChecking)) {
        const multChecker = new MultChecker(numberForChecking);
        do {
            userAnswer = parseInt((_b = prompt(multChecker.generateExample())) !== null && _b !== void 0 ? _b : '');
            if (isNaN(userAnswer))
                break;
            alert(multChecker.getCheckMessage(userAnswer));
        } while (true);
        multChecker.render();
    }
}
