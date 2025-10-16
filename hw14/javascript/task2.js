"use strict";
// Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
if (confirm('Почати тестування?')) {
    function getYearInNMonth(date, monthNumber) {
        const { year, month } = date;
        const MONTH_IN_THE_YEAR = 12;
        return Math.floor((month - 1 + monthNumber) / MONTH_IN_THE_YEAR) + year;
    }
    const date = {
        day: 12,
        month: 11,
        year: 2018,
    };
    const monthNumber = 13;
    const year = getYearInNMonth(date, monthNumber);
    document.write(`
    Дано дату ${date.day}.${date.month}.${date.year}<br/>
    Через ${monthNumber} місяця(ів) буде ${year}рік
    `);
}
