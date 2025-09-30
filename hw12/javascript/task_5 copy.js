"use strict";
// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, 
// чи є у масиві ім’я «Olga» і під яким індексом.
if (confirm('Почати тестування?')) {
    const names = [
        "Oliver",
        "Amelia",
        "James",
        "Sophia",
        "Olga",
        "William",
        "Isabella",
        "Benjamin",
        "Charlotte",
        "Henry",
        "Mia"
    ];
    /**
     * Функція міняє eлементи масиву місцями за індексом
     * @param {string[]} arr масив строк
     * @param {number} index iндекс першого елемента
     * @param {number} prevIndex індекс другого елемента
     */
    function swap(arr, index, prevIndex) {
        const temp = arr[prevIndex];
        arr[prevIndex] = arr[index];
        arr[index] = temp;
    }
    /**
   * Виконує один прохід бульбашкового сортування зліва направо.
   * Порівнює сусідні елементи та міняє їх місцями, якщо вони стоять у неправильному порядку.
   *
   * @param {string[]} arr - Масив строк, який сортується (змінюється напряму).
   * @param {number} rightIndexLimit - Права межа проходу (до якого індексу перевіряємо).
   * @returns {[number, boolean]}
   * - Кортеж із двох значень:
   *   1. Нова права межа (зменшена на 1).
   *   2. Ознака, чи відбулися зміни (true, якщо був хоча б один обмін).
   */
    function bubblePassLeftToRight(arr, rightIndexLimit) {
        let changed = false;
        for (let i = 1; i < rightIndexLimit; i++) {
            if (arr[i - 1] > arr[i]) {
                swap(arr, i, (i - 1));
                changed = true;
            }
        }
        rightIndexLimit--;
        return [rightIndexLimit, changed];
    }
    /**
     * Сортує масив бульбашкою та підраховує кількість обмінів під час сортування
     * @param {string[]} array масив
     * @returns {string[]} array новий відсортований масив
     */
    function sortArrayBubble(array) {
        let sortedArray = [...array];
        let rightIndexLimit = sortedArray.length;
        let changed = false;
        do {
            const sortResult = bubblePassLeftToRight(sortedArray, rightIndexLimit);
            changed = sortResult[1];
            rightIndexLimit = sortResult[0];
        } while (changed);
        return sortedArray;
    }
    const sortedArrayBubble = sortArrayBubble(names);
    document.write(`
    <hr/>
    <strong>Отсортований масив бульбашкою</strong><br/>
    ${sortedArrayBubble.join(', ')}<br/>
    `);
    //Бінарний пошук
    function findIndex__binarySearch(arr, searchElement) {
        let start = 0;
        let end = arr.length - 1;
        while (start <= end) {
            const middle = Math.floor((start + end) / 2);
            if (arr[middle] === searchElement)
                return middle;
            if (arr[middle] < searchElement)
                start = middle + 1;
            if (arr[middle] > searchElement)
                end = middle - 1;
        }
        return -1;
    }
    const searchIndex = findIndex__binarySearch(sortedArrayBubble, 'Olga');
    if (searchIndex !== -1)
        document.write(`Olga входить у масив під індексом: ${searchIndex}`);
    else {
        document.write('Olga  не входить у масив');
    }
}
