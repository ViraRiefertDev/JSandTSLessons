"use strict";
// Задача 6. З використанням замикань розробити ітератор, тобто функцію, що буде поступово за 
// окремими викликами видавати по одну букву наперед заданого слова. 
// З використанням нього розробити гру «Прекладач». 
// Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. 
// Підрахувати кількість вгаданих букв.
if (confirm('Почати тестування?')) {
    function createLetterIterator(word) {
        let letterIndex = -1;
        return function () {
            letterIndex++;
            return [word[letterIndex], letterIndex + 1];
        };
    }
    const words = [
        ["Фрукт, який росте на дереві.", "apple"],
        ["Тварина, яка гавкає.", "dog"],
        ["Те, що ми п’ємо вранці, щоб прокинутись.", "coffee"],
        ["Місце, де ми живемо.", "house"],
        ["Що ти одягаєш на ноги.", "shoes"],
        ["Великий транспорт, який возить багато людей.", "bus"],
        ["Те, що світить уночі на небі, не Сонце.", "moon"],
        ["Прилад, з якого ми телефонуємо.", "phone"],
        ["Людина, що навчає дітей.", "teacher"],
        ["Пора року, коли випадає сніг.", "winter"]
    ];
    const randomWordIndex = Math.floor(Math.random() * (words.length));
    const randomHintAnswer = words[randomWordIndex];
    const getLetter = createLetterIterator(randomHintAnswer[1]);
    let countOfWriteLetters = 0;
    alert(`
    Починаэмо гру!
      ${randomHintAnswer[0]}
    `);
    for (let i = 0; i < randomHintAnswer[1].length; i++) {
        const [letter, letterNumber] = getLetter();
        // const userAnswer = prompt(`Введіть ${letterNumber} букву:`)!
        const raw = prompt(`Введіть ${letterNumber} букву:`);
        if (raw === null) {
            alert('Гру прервано.');
            break;
        }
        const userChar = raw.trim().toLowerCase()[0];
        if (userChar !== letter) {
            alert(`${userChar} ❌`);
        }
        else {
            alert(`${userChar}✅`);
            countOfWriteLetters++;
        }
    }
    alert(`Кількість вгаданих літер: ${countOfWriteLetters}`);
}
