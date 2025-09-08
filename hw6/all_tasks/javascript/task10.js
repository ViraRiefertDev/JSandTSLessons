// Вивести на екран 
// 1 1
// 2 1234
// 3 123456789
// 4 1234…16
// 5 1 … 25
// 6 1…36



if (confirm('Почати тестування?')) {
  let resultHTML = '';
  for(let i = 1; i<=6; i++){
    resultHTML += `${i} `;
    for(let j = 1; j<= i*i; j++){
      resultHTML += `${j} `;
    }
    resultHTML += "<br/>" 
  }
  document.write(resultHTML.trim());
}

