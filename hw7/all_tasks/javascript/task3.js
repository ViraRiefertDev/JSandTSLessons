// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення. 



if (confirm('Почати тестування?')) {
  function getSumOfFour(num1, num2, num3, num4){
    return num1 + num2 + num3 + num4
  }
  function getProductOfFour(num1, num2, num3, num4){
    return num1 * num2 * num3 * num4
  }
  function getAverageOfFour(num1, num2, num3, num4){
    const totalSum = getSumOfFour(num1, num2, num3, num4)
    return totalSum/4;
  }
  function getMinOfFour(num1, num2, num3, num4){
    let min = num1;
    if(num2<min) min=num2;
    if(num3<min) min=num3;
    if(num4<min) min=num4;
    return min
  }

  const sum = getSumOfFour(4,3,2,1)
  const product = getProductOfFour(4,3,2,1)
  const avg = getAverageOfFour(4,3,2,1)
  const min = getMinOfFour(4,3,2,1)
  document.write(`
    <h2>Результати обчислень</h2>
    <p>Сума всіх чисел: ${sum}</p>
    <p>Добуток всіх чисел: ${product}</p>
    <p>Середнє арифметичне: ${avg.toFixed(2)}</p>
    <p>Mінімальне значення: ${min}</p>
    `)
}
