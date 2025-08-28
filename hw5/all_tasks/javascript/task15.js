//Задача 15. Користувача поступово вводить показники температури протягом року. 
// Знайти середню температуру.

if (confirm('Почати тестування?')) {
  const MONTH_IN_YEAR = 12
  let currentMonth
  let tempSum = 0
  for(let i=1; i<=MONTH_IN_YEAR; i++){
    switch (i) {
      case 1: currentMonth = 'січень'
        break;
      case 2: currentMonth = 'лютий'
        break;
      case 3: currentMonth = 'березень'
        break;
      case 4: currentMonth = 'квітень'
        break;
      case 5: currentMonth = 'травень'
        break;
      case 6: currentMonth = 'червень'
        break;
      case 7: currentMonth = 'липень'
        break;
      case 8: currentMonth = 'серпень'
        break;
      case 9: currentMonth = 'вересень'
        break;
      case 10: currentMonth = 'жовтень'
        break;
      case 11: currentMonth = 'листопад'
        break;
      case 12: currentMonth = 'грудень'
        break;
    }
    const currentTemp = parseFloat(prompt(`Введіть температуру за ${currentMonth}`))
    tempSum += currentTemp
  }
  const averageTemp = tempSum/MONTH_IN_YEAR
  alert(`Середня температура за рік: ${averageTemp.toFixed(1)}°С`)
}