// З клавіатури вводяться імена двох дітей та кількість у них цукерок. 
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, 
// або вивести, що кількість однакова.
const firstChildsName = prompt(`Ім'я першої дитини`);
const firstСhildCandiesAmount = parseInt(prompt(`Введіть кількість цукерок для першої дитини`))
const secondChildsName = prompt(`Ім'я другої дитини`);
const secondСhildCandiesAmount = parseInt(prompt(`Введіть кількість цукерок для другої дитини`))
let childHasMoreCandies;
let message;

if(firstСhildCandiesAmount>secondСhildCandiesAmount){
  childHasMoreCandies = firstChildsName;
}else if(secondСhildCandiesAmount>firstСhildCandiesAmount){
  childHasMoreCandies = secondChildsName;
}

if(childHasMoreCandies === undefined){
  message = `Кількість цукерок у дітей ${firstChildsName} і ${secondChildsName} однакова`
}else{
  message =`У дитини по імені ${childHasMoreCandies} більше цукерок`
}``

document.write(`
    <p>${message}</p>
  `)



