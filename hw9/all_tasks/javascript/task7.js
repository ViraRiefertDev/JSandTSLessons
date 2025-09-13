// 7.Дано масив цін. Змінити цей масив так, 
// що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

if (confirm('Почати тестування?')) {
  const prices = [250, 1200, 500, 3000, 750, 1500, 999, 2000, 80, 1100];
  prices.forEach((price, index, baseArr)=>{
    if(price>1000) baseArr[index] = price*0.7
  })
  console.log(prices)
}
