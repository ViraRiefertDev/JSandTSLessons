// Вивести з використанням циклів маркований список з випадковими числами (1-100). 
// Кількість випадкових чисел вводиться користувачем
if (confirm('Почати тестування?')) {
  const MIN = 1;
  const MAX = 100;
  let resultList = '';
  const countOfRandomNumbers = parseInt(prompt('Введіть кількість рандомних чисел'));
  for(let i=0; i<countOfRandomNumbers; i++){
    const randomNumber = MIN + Math.floor(Math.random()*(MAX - MIN+1));
    resultList += `<li>${randomNumber}</li>`
  }

  document.write(`<ul>${resultList}</ul>`)
}