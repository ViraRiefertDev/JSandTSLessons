// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). 
// Вивести на екран назву транспортного засобу, яким він може керувати.

const driverCategory = prompt('Введіть вашу категорію водія');
let vehicleName;
let message;
switch (driverCategory.toUpperCase()) {
  case 'A':
  case 'А': 
    vehicleName = 'мотоцикл'
    break;
  case 'B':
  case 'В':
    vehicleName = 'легковий автомобіль'
    break;
  case 'C':
  case 'С':
    vehicleName = 'вантажний автомобіль'
    break;
  default:
    message = 'Такої категорії не існує'    
    break;
}

if(message===undefined){
  message = `Назва транспортного засобу, яким ви можете керувати: ${vehicleName}`
}

document.write(`
  <p>${message}</p>
`)