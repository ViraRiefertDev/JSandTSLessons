//Користувач задає рік народження. Визначити кількість років користувача.
const START_BIRTH_YEAR = 1900
const currentYear = new Date().getFullYear()

function getAgeByYear(){
  const errorElement = document.querySelector('.error-container')
  errorElement.style = 'color:red'
  errorElement.textContent = ''
  try{
    const yearOfBirth = parseFloat(document.getElementById('birth-year').value)
    if(isNaN(yearOfBirth)){
      throw new Error('Спочатку введіть ваш рік народження')
    }
    if(yearOfBirth>currentYear || yearOfBirth<START_BIRTH_YEAR){
      throw new Error(`Введіть Ваш дійсний рік народження (${START_BIRTH_YEAR}-${currentYear})`)
    }
    const userAge = currentYear-yearOfBirth
    document.querySelector('.result-container>span').textContent = `${userAge} роки/ів`
  }catch(error){
    errorElement.textContent = `!!! ${error.message}`
  }
}
window.onload = function(){
  document.querySelector('button').onclick = getAgeByYear
  
}