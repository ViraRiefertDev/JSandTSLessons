// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців 
// (таблиця заповнюється заданим фіксованим повідомленням).



if (confirm('Почати тестування?')) {
  const columns = parseInt(prompt('Введіть кількість стовпців'))
  const rows = parseInt(prompt('Введіть кількість рядків'))
  const message = prompt('Введіть повідомлення')

  function getTableWithMessage(columns, rows, message){
    let resultTableCode = '<table style="border-style: ridge; border-color: black;">';
    for(let i=1; i<=rows;i++){
      resultTableCode +='<tr>'
      for(let j=1; j<=columns; j++){
        resultTableCode += `<td style="border: 1px solid black;">${message}</td>`
    }
    resultTableCode += '</tr>'
    }
    resultTableCode += '</table>'
    return resultTableCode
  }

  const tableHTML = getTableWithMessage(columns, rows, message)
  document.write(tableHTML)
}
