//Вивести на екран послідовність символів а о а о а о а о а о 
//Всього символів 82

if (confirm('Почати тестування?')) {
  const CHAR_A = 'a';
  const CHAR_O = 'o';
  const CHARS_AMOUNT = 82;
  let lineOfChars = '';

  for(let i = 0; i<CHARS_AMOUNT; i++){
    lineOfChars += ((i%2) ? CHAR_O : CHAR_A) + " ";
  }

  document.write(lineOfChars);
}