//  Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: 
// кількість парних, 
// кількість додатних, 
// кількість більших за 100.

if (confirm('Почати тестування?')) {
  function countEvenNumbers(num1,num2,num3){
    let evenNumberAmount = 0;
    if(num1%2===0) evenNumberAmount++
    if(num2%2===0) evenNumberAmount++
    if(num3%2===0) evenNumberAmount++
    return evenNumberAmount;
  }

  function countPositiveNumbers(num1, num2, num3){
    let positiveNumberAmount = 0;
    if(num1>0)positiveNumberAmount++
    if(num2>0)positiveNumberAmount++
    if(num3>0)positiveNumberAmount++
    return positiveNumberAmount
  }

  function countMoreThan100Numbers(num1, num2, num3){
    let moreThan100Amount = 0;
    if(num1>100)moreThan100Amount++
    if(num2>100)moreThan100Amount++
    if(num3>100)moreThan100Amount++
    return moreThan100Amount
  }

  function getAnalyzeThreeNumbers(num1, num2, num3){
    const evenNumberAmount = countEvenNumbers(num1,num2,num3)
    const positiveNumberAmount = countPositiveNumbers(num1,num2,num3)
    const moreThan100Amount = countMoreThan100Numbers(num1,num2,num3)
    return `Кількість парних: ${evenNumberAmount}<br/>
            Кількість додатніх: ${positiveNumberAmount}<br/>
            Кількість більших за 100: ${moreThan100Amount}`
  }

  const numberAnalyse = getAnalyzeThreeNumbers(324,12,-12)
  document.write(numberAnalyse)
}
