//  Користувач вводить кількість елементів. 
// Створити масив, що складається з вказаної кількості елементів заповнених нулями


if (confirm('Почати тестування?')) {
  const numberOfElements = parseInt(prompt('Введить кількість елементів масиву'))
  //1 Варіант
  // const arr = Array.from({length: numberOfElements}, el=>el=0)
  //2 Варіант
  const arr = new Array(numberOfElements).fill(0)
  console.log(arr)
}
