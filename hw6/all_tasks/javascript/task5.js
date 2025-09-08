// 5. Інвестор вклав S тис. грн на 20 років під 20% річних. 
// Визначити за допомогою циклів суму, яку він одержить (без оподаткування).


if (confirm('Почати тестування?')) {
  const YEARS = 20;
  const INTEREST_RATE_PER_YEAR = 0.2;
  const investmentAmountThousandUAH = parseFloat(prompt("Введіть суму вкладу (тис.грн)"));
  let finalAmount = investmentAmountThousandUAH;
  for(let i = 1; i<=YEARS; i++){
    finalAmount += finalAmount*INTEREST_RATE_PER_YEAR;
  }
  document.write(`Інвестор отримує після ${YEARS} років : ${finalAmount.toFixed(2)} тис.грн`)
}