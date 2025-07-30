// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься.

const numberOfMonth = parseInt(prompt('введіть номер місяця'))
let season

switch (numberOfMonth) {
  case 12:
  case 1:
  case 2:
    season = 'Зима'
    break;
  case 3:  
  case 4:  
  case 5:  
    season = 'Весна'
    break
  case 6:  
  case 7:  
  case 8:  
    season = 'Літо'
    break  
  default:
    season = 'Осінь'
    break;
}

document.write(`
    <p>${season}</p>
  `)