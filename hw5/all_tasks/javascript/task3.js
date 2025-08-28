//  Вивести таблицю з одним рядком і  7 стовпцями

if (confirm('Почати тестування?')) {
  const NUMBER_OF_COLUMNS = 7;
  let resultTableCode = '';
  for(let i=1; i<=NUMBER_OF_COLUMNS; i++){
    resultTableCode += `<td style="border: 1px solid black;">${i}</td>`
  }
  document.write(`
    <table style="border-style: ridge; border-color: black;">
      <tr>
      ${resultTableCode}
      </tr>
    </table>
    `)
}

