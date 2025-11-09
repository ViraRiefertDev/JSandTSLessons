//Розробити калькулятор

const errorContainer = document.querySelector('.error-container')
function calc(operation){
  errorContainer.innerText = ''
  try{
    const firstNumber = parseFloat(document.getElementById('firstNumber').value)
    const secondNumber = parseFloat(document.getElementById('secondNumber').value)
    let result = 0
    if(isNaN(firstNumber)){
      throw new Error('Ви не ввели перше число')
    }
    if(isNaN(secondNumber)){
      throw new Error('Ви не ввели друге число')
    }
    switch (operation) {
      case '+':
        result = firstNumber+secondNumber
        break;
      case '-':
        result = firstNumber-secondNumber
        break;
      case '*':
        result = firstNumber*secondNumber
        break;
      case '/':
        if(secondNumber===0){
          throw new Error('На нуль ділити не можна')
        }
        result = firstNumber/secondNumber
        break;
      default:
        throw new Error('Невідома операція')
    }
    document.querySelector('#result').value = result.toFixed(2)
  }catch(error){
    const errorElement = document.createElement('p')
    errorElement.textContent = `!!! ${error.message}`
    errorElement.style = 'color:red'
    errorContainer.append(errorElement)
  }
}

window.onload = function(){
  const buttonList = document.querySelectorAll('button')
  for (const buttonElement of buttonList) {
    buttonElement.onclick = ()=>(calc(buttonElement.value))
  }
}