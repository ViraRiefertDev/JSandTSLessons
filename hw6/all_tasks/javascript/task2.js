// Відобразити трикутники за допомогою символів «о»
// о
// оо
// ооо
// оооо
// ооооо
// оооооо
// ооооооо

if (confirm('Почати тестування?')) {
  const ROWS = 7;
  let oString='';
  for(let i=0;i<ROWS;i++){
    oString +="o";
    document.write(`${oString}<br>`);
  }
}