// 13. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. 
// Маючи К снарядів користувач намагається потопити корабель. 


if (confirm('Почати тестування?')) {
  const N = 7
  const M = 7
  const K = 9

  const shipX = 1 + Math.floor(Math.random()*N)
  const shipY = 1 + Math.floor(Math.random()*M)
  console.log(shipX, shipY)
  for(let i=0;i<K;i++){
    const coordinateX = parseInt(prompt('Введіть координату X(1-7)💥',"1"))
    const coordinateY = parseInt(prompt('Введіть координату Y(1-7)💥',"1"))
    if(!coordinateX || !coordinateY){
      alert(`Ви прервали гру. До побачення!`)
      break
    }

    if(coordinateX===shipX && coordinateY===shipY){
      alert(`Ура ви потопили корабель!🛥️❌`)
      break
    }else{
      const shotsLeft = K-i-1;
      if(shotsLeft === 0){
        alert('Гра закінчилась, корабель уцілів 😢')
      }else{
        alert(`Ви не попали :( У вас залишилось ${shotsLeft} вистріла/ів`)
      }
    }
  }
}