// Відобразити трикутники за допомогою символів «о»
// оооооооооооо
// ооооооооооо
// оооооооооо
// ооооооооо
// оооооооо
// …
// оо
// о

if (confirm('Почати тестування?')) {
  const ROWS = 12;
  let oString='';
  for(let i=ROWS;i>0;i--){
    for(let j=0; j<i;j++){
      oString+='o';
    }
    document.write(`${oString}<br>`);
    oString='';
  }
}