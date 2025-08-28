// Каса. Користувачу повідомляють суму, яку йому треба сплатити. 
// Користувач поступово вводить суму грошей до тих пір, поки суми 
// не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, 
// яку ще суму потрібно ввести). 

if (confirm('Почати тестування?')) {
  const MAX_AMOUNT = 1000;
  let amountToBePaid =  1 + Math.floor(Math.random()*MAX_AMOUNT)
  while(amountToBePaid>0){
    const paymentAmount = parseFloat(prompt(`Вам треба ще сплатити ${amountToBePaid}$. Внесіть оплату`))
    if(paymentAmount){
      amountToBePaid -= paymentAmount;
    }else{
      alert(`Покупку скасовано!`)
      amountToBePaid=1
      break
    }
  }
  if(amountToBePaid<0){
    alert(`Дякуємо за покупку. Ваша здача: ${Math.abs(amountToBePaid)}$`)
  }else if(amountToBePaid===0){
    alert("Дякуємо за покупку.")
  }
}