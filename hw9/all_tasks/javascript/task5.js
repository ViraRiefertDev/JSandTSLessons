// ----------   Тут використати цикл for..of  -----------
// 5.Дано масив елементів. Знайти добуток додатних елементів

if (confirm('Почати тестування?')) {
  const startArr = [-2, -149, 5, -128, -102, 7, 2, 6, 8, -131, -109, 75, -150, 9, -120];
  let product = 1
  let hasPos = false
  for(const el of startArr){
    if(el>0) {
      product *=el
      hasPos = true
    }
  }
  document.write(hasPos ? product : 'Немає додатних елементів')
}
