// Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).


const randomMonthNumber = Math.floor(Math.random()*12)+1
const randomDayNumber = Math.floor(Math.random()*7)
const sum = randomDayNumber + randomMonthNumber

document.write(`
  <p>Випадковий номер місяця: ${randomMonthNumber}</p>
  <p>Випадковий номер дня: ${randomDayNumber}</p>
  <p>Cума: ${sum}</p>
`)