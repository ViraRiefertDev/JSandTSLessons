// 4. Побудувати ялинку
// о
// оо
// ооо
// оооо
// ооооо
// о
// оо
// ооо
// оооо
// ооооо
// о
// оо
// ооо
// оооо
// ооооо


if (confirm('Почати тестування?')) {
  const ROWS = 5;
  const NUMBER_OF_TRIANGLES = 3
  let oString='';
  let spaceString = '';
  for(let i=0; i<NUMBER_OF_TRIANGLES;i++){
    for(let j=0; j<ROWS; j++){
      oString +="o";
      document.write(`${spaceString}${oString}<br>`);
    }
    oString=''
  }
}