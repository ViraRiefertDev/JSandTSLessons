//Користувач задає кількість оцінок і натискає на кнопку «get table». В
// результаті формується таблиця з input, куди користувач вводить оцінки.
// Після цього натискає на кнопку “get sum” і знаходить середнє значення.
const COUNT_OF_COLUMNS = 1
const errorContainer = document.querySelector('.error-container')
errorContainer.style = 'color:red'
function getTable(){
  try{
    const tableContainer = document.querySelector('.table-container')
    tableContainer.innerHTML = ''
    errorContainer.textContent = ''
    const countOfGrades = parseFloat(document.querySelector('#grades-number').value)
    if(isNaN(countOfGrades)){
      throw new Error('Введіть кількість оцінок')
    }
    if(countOfGrades<=0){
      throw new Error('Кількість оцінок повинно бути число >0')
    }
    const table = document.createElement('table')
    table.style.border = '2px solid violet'
    for (let i = 0; i < countOfGrades; i++) {
      const tr= document.createElement('tr')
      for (let j = 0; j < COUNT_OF_COLUMNS; j++) {
        const td = document.createElement('td')
        td.style.border = '2px solid green'
        td.innerHTML = `<input name='grade-input' value='0' type="number">`
        tr.append(td)
      }
      table.append(tr)
    }
    tableContainer.append(table)
    const getAvarageBtn =  document.createElement('button')
    getAvarageBtn.textContent = 'get sum'
    getAvarageBtn.setAttribute('id','get-avarage')
    getAvarageBtn.onclick = getAvarage
    tableContainer.append(getAvarageBtn)

  }catch(error){
    console.log(error)
    errorContainer.textContent = `!!! ${error.message}`
  }
}

function getAvarage(){
  try{
    let sum = 0
    const gradeList = document.querySelectorAll("input[name='grade-input']")
    for (const gradeInputElement of gradeList) {
      const grade = parseFloat(gradeInputElement.value)
      console.log(grade)
      if(grade === 0){
        throw new Error(`Введіть всі ${gradeList.length} оцінки/ок`)
      }
      if(grade < 0){
        throw new Error(`Оцінки не можуть бути < 0`)
      }
      sum +=grade
    }
    const avarage = sum/gradeList.length
    const resultContainer = document.querySelector('.result-container')
    resultContainer.innerHTML = `<p>Середня оцінка ${avarage.toFixed(2)}</p>`
  }catch(error){
    console.log(error)
    errorContainer.textContent = `!!! ${error.message}`
  }
}


window.onload = function(){
  document.querySelector('#get-table').onclick = getTable
}
