// Задача 11. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.
if (confirm('Почати тестування?')) {
  const high = parseInt(prompt('Введіть верхню границю діапазону'))
  const low = parseInt(prompt('Введіть нижню границю діапазону'))
  let sum = 0;
  let count = 0;
  for(let i=low; i<=high;i++){
    if(i%2){
      count ++
      sum += i;
      if (count===5) break
    }
  }
  if (count === 5) {
    document.write(`Сума п'яти непарних чисел у діапазоні від ${low} до ${high}: ${sum}`);
  } else if (count > 0) {
    document.write(`У діапазоні від ${low} до ${high} лише ${count} непарн(е/их) число(а). Сума: ${sum}`);
  } else {
    document.write(`У діапазоні від ${low} до ${high} немає непарних чисел.`);
  }
}