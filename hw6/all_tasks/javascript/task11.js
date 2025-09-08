

if (confirm('Почати тестування?')) {
  // Вивести на екран усі двоцифрові числа, у яких перша цифра є більшою або рівною за другу.
  let resultHTML = '';
  for(let i=10; i<=99;i++){
    const tens = Math.floor(i/10);
    const ones = i%10;
    if(tens>=ones){
      resultHTML += `${i} `
    }
  }
  document.write(`
    <p>Задача 11</p>
    <p>${resultHTML.trim()}</p>
    `)

  // Вивести на екран усі трицифрові числа, у яких перша цифра є більшою або рівною за суму другої і третьої
  resultHTML = '';
  for(let hundreds = 1; hundreds<=9; hundreds ++){
    for(let tens = 0; tens <=9; tens++){
      for(let ones = 0; ones<=9; ones++){
        if(hundreds>=(tens+ones)){
          resultHTML += `${hundreds}${tens}${ones} `
        }
      }
    }
  }
  document.write(`
    <p>Задача 11.1</p>
    <p>${resultHTML.trim()}</p>
    `)
}

