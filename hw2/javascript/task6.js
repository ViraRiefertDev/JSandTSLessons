// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

const dayOfTheWeekNumber = parseInt(prompt('Введіть номер дня тижня'))
let nameOfDay

switch (dayOfTheWeekNumber) {
  case 1:
    nameOfDay='Понеділок'
    break;
  case 2:
    nameOfDay = 'Вівторок'
    break;
  case 3:
    nameOfDay = 'Середа'
    break;
  case 4:
    nameOfDay = 'Четвер'
    break;
  case 5:
    nameOfDay = 'П\'ятниця'
    break;
  case 6:
    nameOfDay = 'Субота'
    break;
  default:
    nameOfDay = 'Неділя'
    break;
}

document.write(`
    <p>${nameOfDay}</p>
  `)

