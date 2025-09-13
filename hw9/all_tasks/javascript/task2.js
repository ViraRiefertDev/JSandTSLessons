//  Користувач вводить кількість елементів. 
// Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-кам


if (confirm('Почати тестування?')) {
  const numberOfElements = parseInt(prompt('Введить кількість елементів масиву'))
  const middleIndex = Math.floor(numberOfElements/2)
  const arr = new Array(numberOfElements).fill(1, 0, middleIndex).fill(7, middleIndex);
  console.log(arr)
}
