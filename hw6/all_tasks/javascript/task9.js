// Вивести на екран 
// 1 1
// 2 1 2
// 3 1 2 3
// 4 1 2 3 4
// …
// i 1 2 3 ..i
// 23 1 2 3 .. 22 23


if (confirm('Почати тестування?')) {
  let resultHTML = '';
  for(let i=1; i <= 23; i++){
    resultHTML += `${i} `;
    for(let j=1; j<=i; j++){
      resultHTML += `${j} `;
    }
    resultHTML += 'br />'
  }
  document.write(resultHTML.trim())
}

