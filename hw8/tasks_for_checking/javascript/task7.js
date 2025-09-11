// Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

if (confirm('Почати тестування?')) {
  function getTotalMoneyForPeriod(paymentsList, startMonth, endMonth){
    let sum = 0;
    for(let i=startMonth-1; i<endMonth; i++){
      sum+=paymentsList[i]
    }
    return sum
  }

  function getTotalMoneyForEvenMonth(payments){
    let sum=0
    for(let i=1; i<12;i+=2){
      sum += payments[i]
    }
    return sum
  }

  function getTotalMoneyForFirstMonthOfSeasons(payments){
    let sum=0
    for(let i=2; i<12;i+=3){
      sum += payments[i]
    }
    return sum
  }

  const payments = [
    1200, 1150, 980, 1020, 1100, 1250,
    1300, 1280, 1180, 1220, 1350, 1400
  ];

  const paymentsForYear = getTotalMoneyForPeriod(payments, 1, 12);
  const paymentsForFirstHalfYear = getTotalMoneyForPeriod(payments, 1,6)
  const paymentsForSecondHalfYear = getTotalMoneyForPeriod(payments, 7,12)
  const paymentsForSummer = getTotalMoneyForPeriod(payments,6 ,8)
  const paymentsFor2Quartal = getTotalMoneyForPeriod(payments, 4,6)
  const paymentsForEvenMonth = getTotalMoneyForEvenMonth(payments)
  const paymentsForFirstMonthOfSeasons = getTotalMoneyForFirstMonthOfSeasons(payments)

  document.write(`
  Загальна сума платежів за рік: ${paymentsForYear}<br/>
  Сума платежів за перше півріччя: ${paymentsForFirstHalfYear}<br/>
  Сума платежів за друге півріччя: ${paymentsForSecondHalfYear}<br/>
  Сума платежів за літо: ${paymentsForSummer}<br/>
  Сума платежів за 2-й квартал: ${paymentsFor2Quartal}<br/>
  Сума платежів за парні місяці: ${paymentsForEvenMonth}<br/>
  Сума платежів за перші місяці сезонів: ${paymentsForFirstMonthOfSeasons}<br/>
`);

}

