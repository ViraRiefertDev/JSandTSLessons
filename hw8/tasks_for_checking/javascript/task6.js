// Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]


if (confirm('Почати тестування?')) {
  function filterProductsByBudget(productPricesArray, productTitlesArray, budget){
    let availableProducts = []
    for(let i=0; i<productPricesArray.length; i++){
      if(budget>=productPricesArray[i]){
        availableProducts.push(productTitlesArray[i])
      }
    }
    return availableProducts
  }

  let productsPrices = [1000, 20, 31]
  let productsTitles = ['cheese', 'juice', 'bread']

  const budget = parseFloat(prompt('Введіть Ваш бюджет:'))
  const availableProducts = filterProductsByBudget(productsPrices, productsTitles,budget)
  if(availableProducts.length===0){
    document.write('Немає доступних товарів')
  }else{
    document.write(availableProducts)
  }
}

