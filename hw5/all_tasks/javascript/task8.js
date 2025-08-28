// Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).
if (confirm('Почати тестування?')) {
  const NUMBER_OF_ATTEMPTS = 3
  const MIN_NUMBER = 1
  const MAX_NUMBER = 10
  const WIN_MSG = '🎉 🏆 Ура, я вгадав число!';
  const LOSE_MSG = '😢 Вибач, я не вгадав';
  alert(`Загадайте число від ${MIN_NUMBER} до ${MAX_NUMBER}`)
  let guessed = LOSE_MSG
  for(let i=0; i<NUMBER_OF_ATTEMPTS;i++){
    const randomNumber = MIN_NUMBER + Math.floor(Math.random()*(MAX_NUMBER - MIN_NUMBER + 1))
    const answer = confirm(`Ви загадали число ${randomNumber}?`)
    if(answer){
      guessed = WIN_MSG
      break}
  }
  document.write(guessed)
}