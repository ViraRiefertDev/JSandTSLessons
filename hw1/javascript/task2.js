//Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість
// років.

const yearOfBirth = parseInt(prompt('Введіть ваш рік народження'));
const CURRENT_YEAR = 2025;

const age = CURRENT_YEAR-yearOfBirth;

document.write(`
    <p>Ваш рік народження: ${yearOfBirth}</p>
    <strong>Вам: ${age} роки/ів!</і>
  `)