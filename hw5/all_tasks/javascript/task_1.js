// Вивести на екран номери місяців весни і літа (від 3 до 8)

if (confirm('Почати тестування?')) {
  let resultMessage= '';
  for(let i=3; i<=8; i++){
    resultMessage+=`${i}<br/>`
  }
  document.write(`<p>${resultMessage}</p>`)
}