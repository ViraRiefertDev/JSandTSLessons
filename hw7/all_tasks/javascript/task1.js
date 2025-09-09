//Створити функцію, яка за номером місяця повертає його назву.

if (confirm('Почати тестування?')) {
  function nameOfMonthByNumber(numberOfMonth){
    let nameOfMonth;
    switch (numberOfMonth) {
      case 1: nameOfMonth='Січень'
        break;
      case 2: nameOfMonth='Лютий'
        break;
      case 3: nameOfMonth='Березень'
        break;
      case 4: nameOfMonth='Квітень'
        break;
      case 5: nameOfMonth='Травень'
        break;
      case 6: nameOfMonth='Червень'
        break;
      case 7: nameOfMonth='Липень'
        break;
      case 8: nameOfMonth='Серпень'
        break;
      case 9: nameOfMonth='Вересень'
        break;
      case 10: nameOfMonth='Жовтень'
        break;
      case 11: nameOfMonth='Листопад'
        break;
      case 12: nameOfMonth='Грудень'
        break;
    
      default: nameOfMonth = 'Нема такого місяця'
        break;
    }
    return nameOfMonth
  }
  
  const userMonthNumber = parseInt(prompt('Введіть номер місяця року (1-12) щоб отримати його назву'))
  const nameOfMonth = nameOfMonthByNumber(userMonthNumber)
  document.write(`${userMonthNumber} місяць року - це ${nameOfMonth}`)
  
}
