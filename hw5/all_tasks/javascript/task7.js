//Вивести на екран N абзаців (N вводиться користувачем) за зразком:
if (confirm('Почати тестування?')) {
  const N = parseInt(prompt('Введіть кількість абзаців'));
  let resultHTML = '';
  for(let i=1; i<=N;i++){
    resultHTML += `<h1>Заголовок ${i}</h1>`
    for(let j=1; j<=i; j++){
      resultHTML += `<p>Розділ ${i}, параграф ${j}</p>`
    }
    resultHTML += '<hr>'
  }
  console.log(resultHTML)
  
  document.write(`${resultHTML}`)
}