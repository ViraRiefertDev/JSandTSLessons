//Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії 
// він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), 
// трійочник(є хоча би одна трійка)).


if (confirm('Почати тестування?')) {
  function getAvgNote(notesArr){
    let sum = 0
    for(let i=0; i<notesArr.length; i++){
      sum += notesArr[i]
    }
    return sum/notesArr.length
  }

  function getCategoryOfStudent(notesArr){
    if(getAvgNote(notesArr)=== 5){
        return 'відмінник'
      }
    for(let i=0; i<notesArr.length; i++){
      if(notesArr[i]===2){
        return 'Двійочник'
      }else if(notesArr[i]===3) return 'трійочник'
    }
    return 'хорошист'
  }
  const notesList = [5, 5, 5, 5]
  const avgNote = getAvgNote(notesList)
  const category = getCategoryOfStudent(notesList)
  document.write(`Середня оцінка: ${avgNote}<br/> Студент ${category}`)
}
