// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
//    номери днів, протягом яких кількість відвідувачів була меншою за 20;
//    номери днів, коли кількість відвідувачів була мінімальною;
//    номери днів, коли кількість відвідувачів була максимальною;
//    загальну кількість клієнтів у робочі дні та окремо загальну кількість клієнтів на вихідних.



if (confirm('Почати тестування?')) {
  function getMinVisitors(visitorsPerWeekArray){
    let minVisitors = visitorsPerWeekArray[0];
    for(let i = 1; i<visitorsPerWeekArray.length; i++){
      if(visitorsPerWeekArray[i] < minVisitors) minVisitors = visitorsPerWeekArray[i]
    }
    return minVisitors
  }
  function getMaxVisitors(visitorsPerWeekArray){
    let maxVisitors = visitorsPerWeekArray[0];
    for(let i = 1; i<visitorsPerWeekArray.length; i++){
      if(visitorsPerWeekArray[i] > maxVisitors) maxVisitors = visitorsPerWeekArray[i]
    }
    return maxVisitors
  }

  function getDaysNumOfVisitorsLess20(visitorsPerWeekArray){
    let daysArray = [];
    for(let i=0; i<visitorsPerWeekArray.length; i++){
      if(visitorsPerWeekArray[i]<20){
        daysArray.push(i+1)
      }
    }
    return daysArray
  }
  function getDaysNumOfVisitorsMin(visitorsPerWeekArray){
    let daysArray = [];
    const minVisitors = getMinVisitors(visitorsPerWeekArray)
    for(let i=0; i<visitorsPerWeekArray.length; i++){
      if(visitorsPerWeekArray[i]=== minVisitors){
        daysArray.push(i+1)
      }
    }
    return daysArray
  }
  function getDaysNumOfVisitorsMax(visitorsPerWeekArray){
    let daysArray = [];
    const maxVisitors = getMaxVisitors(visitorsPerWeekArray)
    for(let i=0; i<visitorsPerWeekArray.length; i++){
      if(visitorsPerWeekArray[i]=== maxVisitors){
        daysArray.push(i+1)
      }
    }
    return daysArray
  }

  function getTotalNumOfVisitorsOnWorkDays(visitorsPerWeekArray){
    const NUMBER_OF_WORK_DAYS = 5
    let sum = 0
    for(let i=0; i<NUMBER_OF_WORK_DAYS; i++){
      sum +=visitorsPerWeekArray[i]
    }
    return sum
  }
  function getTotalNumOfVisitorsOnHolidaysDays(visitorsPerWeekArray){
    const NUMBER_OF_WORK_DAYS = 5
    let sum = 0
    for(let i=NUMBER_OF_WORK_DAYS; i<visitorsPerWeekArray.length; i++){
      sum +=visitorsPerWeekArray[i]
    }
    return sum
  }

  const visitorsArray = [20, 7, 17, 200, 200, 200, 100]

  const daysVisitorsLess20 = getDaysNumOfVisitorsLess20(visitorsArray)
  const daysWithMinVisitors = getDaysNumOfVisitorsMin(visitorsArray)
  const daysWithMaxVisitors = getDaysNumOfVisitorsMax(visitorsArray)
  const totalVisitorsOnWorkDays = getTotalNumOfVisitorsOnWorkDays(visitorsArray)
  const totalVisitorsOnHolidays = getTotalNumOfVisitorsOnHolidaysDays(visitorsArray)

  document.write(`
    номери днів, протягом яких кількість відвідувачів була меншою за 20: ${daysVisitorsLess20}<br/>
    номери днів, коли кількість відвідувачів була мінімальною: ${daysWithMinVisitors}<br/>
    номери днів, коли кількість відвідувачів була максимальною: ${daysWithMaxVisitors}<br/>
    загальнa кількість клієнтів у робочі дні: ${totalVisitorsOnWorkDays}<br/>
    загальнa кількість клієнтів у вихідні дні: ${totalVisitorsOnHolidays}
    `)
}
