// Поступово генерувати 100 випадкових чисел від 1 до 1000. 
// Підрахувати яких чисел більше: парних чи непарних.

if (confirm('Почати тестування?')) {
  const MIN = 1, MAX = 1000;
  const COUNT_OF_RANDOM_NUMBER = 100

  let evenCount = 0;
  let resultMessage;

  for(let i=0; i<COUNT_OF_RANDOM_NUMBER; i++){
    const randomNumber = MIN + Math.floor(Math.random()*(MAX-MIN + 1));
    if(randomNumber%2 === 0){
      evenCount++;
    }
  }
  const oddCount = COUNT_OF_RANDOM_NUMBER-evenCount;

  if(evenCount===oddCount){
    resultMessage = `Парних і непарних чисел однакова кількість: ${oddCount}`
  }else{
    const comparisonText = evenCount > oddCount ? 'більше':'менше';
    resultMessage = `Парних чисел: ${evenCount} ${comparisonText} ніж непарних: ${oddCount}`
  }

  document.write(`<p>${resultMessage}</p>`)
}
