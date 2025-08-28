// Вивести на екран 8 кнопок з написом “Hello”.
if (confirm('Почати тестування?')) {
  const NUMBER_OF_BUTTONS = 8;
  for(let i=1; i<=NUMBER_OF_BUTTONS; i++){
    document.write(`<button>Hello ${i}</button><br/>`)
  }
}