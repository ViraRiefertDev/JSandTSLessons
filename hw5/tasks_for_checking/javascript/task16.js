//Задача 16. Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. 
// Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.


if (confirm('Почати тестування?')) {
  const DAYS_PER_WEEK = 7
  let totalProfit = 0
  let weeklyProfitHTML = ''

  const numberOfWeeks = parseInt(prompt('Введіть кількість тижднів'))

  for(let i=1; i<=numberOfWeeks; i++){
    let profitPerWeek = 0

    for(let day=1; day<=DAYS_PER_WEEK;day++){
      let dayName
      switch (day) {
        case 1: dayName='понеділок'   
        break;
        case 2: dayName='вівторок'   
        break;
        case 3: dayName='середу'   
        break;
        case 4: dayName='четвер'   
        break;
        case 5: dayName='п\'ятницю'   
        break;
        case 6: dayName='суботу'   
        break;
        case 7: dayName='неділю'   
        break;
      }
      const profitPerDay = parseFloat(prompt(`Введіть величину прибутку за ${i} неділю за ${dayName}`))
      totalProfit +=profitPerDay
      profitPerWeek += profitPerDay
    }

    weeklyProfitHTML += `<p>${i} тиждень: ${profitPerWeek.toFixed(2)}$</p>`
  }

  document.write(`
    <p>Загальна величина прибутку: <strong>${totalProfit.toFixed(2)}$</strong></p>
    <div>${weeklyProfitHTML}</div>
    `)
}