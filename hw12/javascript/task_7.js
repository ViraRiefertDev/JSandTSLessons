"use strict";
// Задача 7. Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). 
// Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
if (confirm('Почати тестування?')) {
    function randomDay() {
        return (1 + Math.floor(Math.random() * 7));
    }
    function getRandomMatrix(rowsNum, colsNum) {
        return Array.from({ length: rowsNum }, () => Array.from({ length: colsNum }, () => randomDay()));
    }
    function get2DMatixInString(array) {
        let resultString = '[';
        for (const row of array) {
            resultString += '<br/>';
            for (const col of row) {
                resultString += `${col} `;
            }
        }
        resultString += '<br/>]<hr/>';
        return resultString;
    }
    const randomMatrix = getRandomMatrix(4, 8);
    const stringRandomMatrix = get2DMatixInString(randomMatrix);
    document.write(`Випадковий двомірний масив: <br/>${stringRandomMatrix}`);
    const numOfSundaysArray = randomMatrix.map((row) => row.reduce((sum, day) => day === 7 ? sum + 1 : sum, 0));
    numOfSundaysArray.forEach((count, i) => {
        document.write(`У рядку ${i + 1} кількість неділь: ${count}<br/>`);
    });
}
