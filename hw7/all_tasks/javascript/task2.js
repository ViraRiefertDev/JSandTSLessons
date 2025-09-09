//Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm('Почати тестування?')) {
  function isWorkingDay(numberOfDay){
    let dayType;
    switch (numberOfDay) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:dayType='робочий'
        break;
      case 6:
      case 7:dayType = 'вихідний'
        break;
      default: dayType = 'не існуючий'
        break;
    }
    return dayType
  }

  const numberOfDay = parseInt(prompt('Введіть номер дня (1-7)'))
  const dayType = isWorkingDay(numberOfDay)
  document.write(`${numberOfDay} день неділі - це ${dayType} день`)
}
