// Вивести таблицю з 3 рядків і 3 стовпців

if (confirm('Почати тестування?')) {
  const NUMBER_OF_COLUMNS = 3;
  const NUMBER_OF_ROWS = 3;
  let numberOfCells = 1;
  let resultTableCode = '';
  for(let i=1; i<=NUMBER_OF_ROWS;i++){
    resultTableCode +='<tr>'
    for(let j=1; j<=NUMBER_OF_COLUMNS; j++){
      resultTableCode += `<td style="border: 1px solid black;">${numberOfCells}</td>`
      numberOfCells++
    }
    resultTableCode += '</tr>'
  }
  document.write(`
    <table style="border-style: ridge; border-color: black;">
      ${resultTableCode}
    </table>
    `)
}