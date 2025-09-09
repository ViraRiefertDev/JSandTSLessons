//Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

if (confirm('Почати тестування?')) {
  function seasonsByMonthNumber(numberOfMonth){
    let nameOfSeason;
    switch (numberOfMonth) {
      case 12:
      case 1:
      case 2: nameOfSeason='Зима'
        break;
      case 3: 
      case 4: 
      case 5: nameOfSeason='Весна'
        break;
      case 6:
      case 7:
      case 8: nameOfSeason='Літо'
        break;
      case 9:
      case 10:
      case 11: nameOfSeason='Осінь'
        break;
    
      default: nameOfSeason = 'Нема такого місяця'
        break;
    }
    return nameOfSeason
  }
  
  const userMonthNumber = parseInt(prompt('Введіть номер місяця року (1-12) щоб отримати пору року'))

  const nameOfSeason = seasonsByMonthNumber(userMonthNumber)
  
  document.write(`${userMonthNumber} місяць року - це ${nameOfSeason}`)
}
