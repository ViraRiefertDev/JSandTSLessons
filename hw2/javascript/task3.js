// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

const randomNumber = Math.floor(Math.random()*5+1);
console.log(randomNumber);
let userNumber = parseInt(prompt('Спробуйте вгадати число від 1 до 5 за 2 спроби.'));
let message

if(userNumber ===randomNumber){
  message = `Ураа ${userNumber} це вірне число! З першого разу, це круто!`
}else{
  userNumber = parseInt(prompt('Не вірно! Спробуйте вгадати число від 1 до 5. Залишилась 1 спроба.'))
  if(userNumber === randomNumber){
    message = `Ураа ${userNumber} це вірне число! Ви вгадали!`
  }else
    message = `На жаль не вірно. Загадане число було ${randomNumber}`
}

document.write(`
    <p>${message}</p>
  `)

