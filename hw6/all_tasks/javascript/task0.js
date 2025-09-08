//  Вивести на екран 
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I
if (confirm('Почати тестування?')) {
  const NUMBER_OF_ROWS = 5;
  const NUMBER_OF_COLUMNS = 5;
  let resultHTML = '';
  const CHAR_CODE_A = 65;
  for(let i=0; i<NUMBER_OF_ROWS; i++){
    const firstCharCode = CHAR_CODE_A+i
    for(let j=0; j<NUMBER_OF_COLUMNS;j++){
      const currentCharCode = firstCharCode+j;
      resultHTML+=String.fromCharCode(currentCharCode)+ " ";
    }
    resultHTML += "<br>"
  }
  document.write(resultHTML)
}
