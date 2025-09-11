// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

if (confirm('Почати тестування?')) {
  
  function getCountOf2(gradesArray){
    let count = 0
    for(let i=0; i<gradesArray.length; i++){
      if(gradesArray[i]===2) count++
    }
    return count
  }

  function getCountOfGoodGrades(gradesArray){
    let count = 0
    for(let i=0; i<gradesArray.length; i++){
      if(gradesArray[i]>=4) count++
    }
    return count
  }

  function getCountOfBelowAvarageGrade(gradesArray){
    let count = 0
    for(let i=0; i<gradesArray.length; i++){
      if(gradesArray[i]<4) count++
    }
    return count
  }

  const grades = [2, 3, 4, 5, 2, 4, 3, 5, 2, 4];
  const countOfGrades2 = getCountOf2(grades)
  const countOfGoodGrades = getCountOfGoodGrades(grades)
  const countOfBelowAvarageGrades = getCountOfBelowAvarageGrade(grades)

  document.write(`
      Кількість двійок: ${countOfGrades2}<br/>
      Кількість хороших оцінок (добре, відмінно: ${countOfGoodGrades}<br/>
      Кількість оцінок, які нижче середнього: ${countOfBelowAvarageGrades}<br/>
    `)
}

