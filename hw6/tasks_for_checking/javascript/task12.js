// 12. Написати програму виведення на екран кожного символу латинського алфавіту 
// та поруч з кожним з них символу, що передує йому та що слідує за ним.

if (confirm('Почати тестування?')) {
  let resultHTML = '';
  let code = 65;
  resultHTML += `- → ${String.fromCharCode(code)} → ${String.fromCharCode(++code)} <br />`;
  while(code<90){
    resultHTML += `${String.fromCharCode(code-1)} → ${String.fromCharCode(code)} → ${String.fromCharCode(++code)}<br />`;
  }
  resultHTML += `${String.fromCharCode(code-1)} → ${String.fromCharCode(code)} → -<br />`;
  document.write(resultHTML)

  // Варіант 2
  resultHTML = '';
  for(let code = 65; code <= 90; code++){
    const curr = String.fromCharCode(code);
    const prev = code === 65 ?  '-': String.fromCharCode(code-1);
    const next = code === 90 ?  '-' : String.fromCharCode(code+1);
    resultHTML += `${prev} → ${curr} → ${next} <br/>`
  }
  document.write(`
    <h1>Варіант 2</h1>
    <p>${resultHTML}</p>
    `)
}



