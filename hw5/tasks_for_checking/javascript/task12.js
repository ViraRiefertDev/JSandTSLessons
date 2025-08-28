// Задача 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції 
// вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача 
// (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). 
// Використати цикли і switch (для вибору зображення за номером).

if (confirm('Почати тестування?')) {
  const POSITIONS = 3
  const IMAGE_VARIANTS = 4
  let winMessage = "На жаль ви не виграли, спробуйте ще раз"
  let resultHTML = ' <div style="display:inline-flex;border-style: ridge; border-color: black;">'
  let comboCode = ''
  for(let i=0; i<POSITIONS; i++){
    let srcImage = '';
    const n = 1 + Math.floor(Math.random()*IMAGE_VARIANTS)
    switch (n) {
      case 1: srcImage = "hw5/assets/cherry.png"
        break;
      case 2: srcImage = "hw5/assets/lemon.png"
        break;
      case 3: srcImage = "hw5/assets/watermelon.png"
        break;
      case 4: srcImage = "hw5/assets/orange.png"
        break;
    }
    resultHTML += `<div style="padding:10px;border-style: ridge; border-color: black;">
          <img src=${srcImage} width="80" />
        </div>`
    comboCode += n
  }
  resultHTML += '</div>'
  switch (comboCode) {
    case "111": 
      winMessage = "Ви виграли 100грн"
      break;
    case "222": 
      winMessage = "Ви виграли 200грн"
      break;
    case "333": 
      winMessage = "Ви виграли 500грн"
      break;
    case "444": 
      winMessage = "Ви виграли 1000грн"
      break;
  }

  document.write(`
      ${resultHTML}
      <p>${winMessage}</p>
    `)
}