// Задача 5.  З використанням замикань розробити ітератор, тобто функцію, що буде поступово за 
// окремими викликами видавати по одному значенню від заданого мінімального до заданого максимального.
// Якщо значення досягне максимального, то наступним буде мінімальне значення. 
// З використанням цієї функції реалізувати перебір номерів місяців. 


if (confirm('Почати тестування?')) {
  function numberIterator(minValue:number,maxValue:number):()=>number{
    let iterierteNumber = minValue-1
    return ()=>{
      iterierteNumber++
      if(iterierteNumber>maxValue){
        iterierteNumber=minValue
      }
      return iterierteNumber
    }
  }
  function getMonthNumbersForPeriode(monthsNumber:number){
    const START_MONTHS_NUMBER=1
    const ENDS_MONTHS_NUMBER=12
    const getMonthNumber = numberIterator(START_MONTHS_NUMBER,ENDS_MONTHS_NUMBER)
    for(let i=1; i<=monthsNumber; i++){
      document.write(`${getMonthNumber()}<br/>`)
    }
  }

  getMonthNumbersForPeriode(24)
}

