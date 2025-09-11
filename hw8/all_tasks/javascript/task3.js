// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».



if (confirm('Почати тестування?')) {

  function getNumberOfIvan(studentsArray, searchName){
    let counter = 0
    for(let i=0; i<studentsArray.length; i++){
      if(studentsArray[i]===searchName) counter++
    }
    return counter
  }
  const studentsArray = ['Ivan', 'Vira', 'Ivan', 'Olga']
  const numberOfIvan = getNumberOfIvan(studentsArray, 'Ivan')
  document.write(`Ім'я Іван зустрічається ${numberOfIvan} рази(ів)`)
}

