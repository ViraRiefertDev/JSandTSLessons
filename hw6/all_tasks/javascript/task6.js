//6. Інвестор вклав  тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. 
// Визначити за допомогою циклів суму, яку він одержить.



if (confirm('Почати тестування?')) {
  const YEARS = 20;
  const INTEREST_RATE_PER_YEAR = 0.2;
  const PROFIT_TAX_RATE = 0.05;
  const investmentAmountThousandUAH = parseFloat(prompt("Введіть суму вкладу (тис.грн)"));
  let finalAmount = investmentAmountThousandUAH;
  for(let i = 1; i<=YEARS; i++){
    finalAmount += finalAmount * INTEREST_RATE_PER_YEAR;
  }
  const netAmount = finalAmount - (finalAmount - investmentAmountThousandUAH) * PROFIT_TAX_RATE;
  document.write(`Інвестор отримує після ${YEARS} років : ${netAmount.toFixed(2)} тис.грн`)
}