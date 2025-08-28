//  Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком

if (confirm('Почати тестування?')) {
  const NUMBER_OF_TABLES = 3;
  const NUMBER_OF_COLUMNS = 3;
  const NUMBER_OF_ROWS = 3;
  let numberOfCells = 1;
  let resultTableCode = '';
  for(let i=1;i<=NUMBER_OF_TABLES;i++){
    resultTableCode += '<table style="border-style: ridge; border-color: black;">'
    for(let j=1; j<=NUMBER_OF_ROWS;j++){
      resultTableCode +='<tr>'
      for(let k=1; k<=NUMBER_OF_COLUMNS; k++){
        resultTableCode += `<td style="border: 1px solid black;">${numberOfCells}</td>`
        numberOfCells++;
      }
      resultTableCode += '</tr>'
    }
    resultTableCode += '</table>'
  }
  document.write(`
    <div style="display:flex; gap:40px">
      ${resultTableCode}
    </div>
  `)
}