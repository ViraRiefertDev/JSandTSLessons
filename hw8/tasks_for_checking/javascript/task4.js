// Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;

if (confirm('Почати тестування?')) {
  //----------------------------------------------------------------
  //* Перший варіант

  // function getCarPlateWithStartA(carPlatesArray){
  //   let count = 0
  //   for(let i=0; i<carPlatesArray.length; i++){
  //     if(carPlatesArray[i][0]==='A'){
  //       count++
  //     }
  //   }
  //   return count
  // }

  // function getCarPlateWithSameStartAndEndLetter(carPlatesArray){
  //   let count = 0
  //   for(let i=0; i<carPlatesArray.length; i++){
  //     const lastCharIndex = carPlatesArray[i].length-1
  //     if(carPlatesArray[i][0] === carPlatesArray[i][lastCharIndex]){
  //       count ++
  //     }
  //   }
  //   return count
  // }

  // function getCarPlateWithMoreThan5Letter(carPlatesArray){
  //   let count = 0
  //   for(let i=0; i<carPlatesArray.length; i++){
  //     if(carPlatesArray[i].length>5){
  //       count ++
  //     }
  //   }
  //   return count
  // }

  // const carPlatesArray = [
  //   "AA123A",
  //   "AB456C",
  //   "BX77XB",
  //   "C1234",
  //   "D12D",
  //   "A1",
  //   "M99999",
  //   "AZZZA"
  // ]
  
  // const carPlateWithStartA = getCarPlateWithStartA(carPlatesArray);
  // const carPlateWithSameStartAndEndLetter = getCarPlateWithSameStartAndEndLetter(carPlatesArray);
  // const carPlateWithWithMoreThan5Letter = getCarPlateWithMoreThan5Letter(carPlatesArray);
  // document.write(`
  //   Кількість номерів, які починаються на букву «А»: <strong>${carPlateWithStartA}</strong><br/>
  //   Кількість номерів, у яких перша і остання літери співпадають: <strong>${carPlateWithSameStartAndEndLetter}</strong>;<br/>
  //   Кількість номерів,які складаються з більше ніж з 5 символів: <strong>${carPlateWithWithMoreThan5Letter}</strong>;
  //   `)

  //----------------------------------------------------------------
  //* Другий варіант

  function isStartsWithLetter(plate, letter){
    return plate.charAt(0) === letter
  }

  function isSameFirstLastLetter(plate){
    const firstChar = plate.charAt(0)
    const lastChar = plate.charAt(plate.length-1)
    return firstChar === lastChar
  }

  function isLongerThan5(plate){
    return plate.length>5
  }

  const carPlatesArray = [
    "AA123A",
    "AB456C",
    "BX77XB",
    "C1234",
    "D12D",
    "A1",
    "M99999",
    "AZZZA"
  ]

  let countStartsA = 0;
  let countSameFirstLast = 0;
  let countLonger5 = 0;

  for(let i=0; i<carPlatesArray.length; i++){
    if(isStartsWithLetter(carPlatesArray[i], 'A')) countStartsA++
    if(isSameFirstLastLetter(carPlatesArray[i])) countSameFirstLast++
    if(isLongerThan5(carPlatesArray[i])) countLonger5++
  }
  
  document.write(`
    Кількість номерів, які починаються на букву «А»: <strong>${countStartsA}</strong><br/>
    Кількість номерів, у яких перша і остання літери співпадають: <strong>${countSameFirstLast}</strong>;<br/>
    Кількість номерів,які складаються з більше ніж з 5 символів: <strong>${countLonger5}</strong>;
    `)
}

