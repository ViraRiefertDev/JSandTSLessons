// Задача 9. Дано покази температур (довільна кількість). 
// Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

if (confirm('Почати тестування?')) {

  function getNumberOfNegTemp(tempArr){
    let count = 0
    for(let i=0; i<tempArr.length; i++){
      if(tempArr[i]<0) count++
    }
    return count
  }

  const tempArr = [2,12,-1,-4, 12, -5]
  const numberOfNegTemp = getNumberOfNegTemp(tempArr)
  document.write(`Кількість від’ємних температур: ${numberOfNegTemp}`)
}
