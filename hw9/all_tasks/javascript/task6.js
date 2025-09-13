// 6. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

if (confirm('Почати тестування?')) {
  const elArr = [50, 149, 5, 128, -102, 7, 2, 6, 8, -131, -109, 75, -150, 9, 120];
  const firstEl = elArr[0]
  elArr.forEach((el, index, baseArr)=>{
    if(el>firstEl) baseArr[index] *=2
  })

  console.log(elArr)
}
