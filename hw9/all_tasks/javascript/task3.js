// Користувач вводить кількість елементів. 
// Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.



if (confirm('Почати тестування?')) {
  const numberOfElements = parseInt(prompt('Введить кількість елементів масиву'))
  const arr = new Array(numberOfElements).fill(1,0,5).fill(7,5)
  console.log(arr)
}
