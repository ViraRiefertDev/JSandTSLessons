// З клавіатури вводиться вік людини. Вивести на екран ким він є 
// (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const userAge = parseInt(prompt('Введіть свій вік'))
let message

if(userAge<7){
  message = 'Ви дитина'
}else if(userAge < 18){
  message = 'Ви школяр'
}else if(userAge < 22){
  message = 'Ви студент'
}else if(userAge<65){
  message = 'Ви працівник'
}else{
  message = 'Ви пенсіонер'
}

document.write(`
    <p>${message}</p>
  `)