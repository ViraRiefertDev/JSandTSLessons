// Задача 10. Дано покази температур (довільна кількість). 
// Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

if (confirm('Почати тестування?')) {

  function getAvgOfPosTemp(tempArr){
    let sum = 0
    let numberOfPosTemp = 0;
    for(let i=0; i<tempArr.length; i++){
      if(tempArr[i]>0) {
        sum += tempArr[i]
        numberOfPosTemp ++
      }
    }
    if(numberOfPosTemp===0) return -1
    return sum/numberOfPosTemp
  }

  const tempArr = [2,12,-1,-4, 12, -5]
  const avarageTemp = getAvgOfPosTemp(tempArr)
  if (avarageTemp === -1) {
  document.write("Додатніх температур немає");
  } else {
  document.write(`середня позитивна температура: ${avarageTemp.toFixed(1)}`);
}
}
