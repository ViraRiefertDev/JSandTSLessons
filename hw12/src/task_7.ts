// Задача 7. Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). 
// Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.




if (confirm('Почати тестування?')) {
  type Day = 1|2|3|4|5|6|7
  function randomDay():Day{
    return (1+Math.floor(Math.random()*7)) as Day
  }
  function getRandomMatrix(rowsNum:number,colsNum:number):Day[][]{
    return Array.from({length:rowsNum},()=>Array.from({length:colsNum},()=>randomDay()))
  }
  function get2DMatixInString(array:number[][]):string{
    let resultString = '['
    for (const row of array) {
      resultString += '<br/>'
      for (const col of row) {
        resultString += `${col} `
      }
    }
    resultString += '<br/>]<hr/>'
    return resultString 
  }

  const randomMatrix = getRandomMatrix(4,8)
  const stringRandomMatrix = get2DMatixInString(randomMatrix)
  document.write(`Випадковий двомірний масив: <br/>${stringRandomMatrix}`)

  const numOfSundaysArray = randomMatrix.map((row)=>row.reduce((sum,day)=>day===7?sum+1:sum,0))
  
  numOfSundaysArray.forEach((count, i) => {
    document.write(`У рядку ${i+1} кількість неділь: ${count}<br/>`);
  });

}
