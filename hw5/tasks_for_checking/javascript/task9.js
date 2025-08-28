// Задача 9. Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).
if (confirm('Почати тестування?')) {
  const MIN_NUMBER = 1
  const MAX_NUMBER = 100
  let low=MIN_NUMBER
  let high = MAX_NUMBER
  let guess
  let questionsCount = 0;
  const WIN_MSG = `🎉 🏆 Ура, я вгадав число`
  const LOSE_MSG = '😢 Ваші відповіді суперечливі. Так не чесно!'
  let guessedMsg = LOSE_MSG
  alert(`Загадайте число від ${MIN_NUMBER} до ${MAX_NUMBER}`)

  while(low<=high){
    questionsCount++
    guess = Math.floor((high - low)/2) + low
    let answer = confirm(`Це ваше число ${guess}?`)
    if(answer){
      guessedMsg =`${WIN_MSG} за ${questionsCount} запитань/ня!`
      break
    }
    answer = confirm(`Ваше число вище ${guess}?`)
    if(answer) low = guess+1
    else high = guess-1

  }
  document.write(guessedMsg)
}