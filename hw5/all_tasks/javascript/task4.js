// Вивести таблицю з 3 рядків і 7 стовпців

if (confirm('Почати тестування?')) {
  const NUMBER_OF_COLUMNS = 7;
  const NUMBER_OF_ROWS = 3;
  let resultTableCode = '';
  for(let i=1; i<=NUMBER_OF_ROWS;i++){
    resultTableCode +='<tr>'
    for(let j=1; j<=NUMBER_OF_COLUMNS; j++){
      resultTableCode += `<td style="border: 1px solid black;">${j}</td>`
    }
    resultTableCode += '</tr>'
  }
  document.write(`
    <table style="border-style: ridge; border-color: black;">
      ${resultTableCode}
    </table>
    `)
}