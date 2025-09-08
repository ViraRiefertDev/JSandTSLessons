//7. Інвестор вклав S тис. грн на 20 років під 20% річних, а потім на 17 років під 27% річних. 
// Визначити за допомогою циклів суму, яку він одержить.

if (confirm('Почати тестування?')) {
  const FIRST_PERIOD_YEARS = 20;
  const FIRST_PERIOD_RATE = 0.2;

  const SECOND_PERIOD_YEARS = 17;
  const SECOND_PERIOD_RATE = 0.27;

  const investmentYears = FIRST_PERIOD_YEARS + SECOND_PERIOD_YEARS;
  const investmentAmountThousandUAH = parseFloat(prompt("Введіть суму вкладу (тис.грн)"));
  let finalAmount = investmentAmountThousandUAH;

  for(let i=1; i<=FIRST_PERIOD_YEARS;i++){
    finalAmount += finalAmount*FIRST_PERIOD_RATE;
  }

  for(let i=1; i<=SECOND_PERIOD_YEARS;i++){
    finalAmount += finalAmount*SECOND_PERIOD_RATE;
  }

  document.write(`Інвестор отримує після ${investmentYears} років : ${finalAmount.toFixed(2)} тис.грн`)
}