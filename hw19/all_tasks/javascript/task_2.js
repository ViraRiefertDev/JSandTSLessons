//Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них 
// необхідно автоматично заповнювати інші (усі попередні у спадному порядку
// (кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше 
// (кожен наступне на 1 більше за попереднього)

function onChange(evt){
  const changedElement = evt.target
  //інпути після цього інпута
  let nextInput = changedElement.nextElementSibling
  let currentInputValue = parseFloat(changedElement.value)
  while(nextInput){
    if(nextInput.tagName === 'INPUT') {
      currentInputValue +=1
      nextInput.value =currentInputValue
    }
    nextInput = nextInput.nextElementSibling
  }

  //інпути до цього інпута
  let previousInput = changedElement.previousElementSibling
  currentInputValue = parseFloat(changedElement.value)
  while(previousInput){
    if(previousInput.tagName === 'INPUT'){
      currentInputValue -=1
      previousInput.value = currentInputValue
    }
    previousInput = previousInput.previousElementSibling
  }
}

const inputsContainer = document.querySelector('#inputsContainer')
inputsContainer.addEventListener('input',onChange)
