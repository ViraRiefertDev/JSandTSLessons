// Створити службове авто (водій, марка, номер). 
// Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

if (confirm('Почати тестування?')) {
  interface ICar{
    owner:string,
    model:string,
    number:string
  }
  class Car{
    private static carRef:Car
    constructor(carInfo:ICar){
      if(Car.carRef !==undefined){
        return Car.carRef
      }
      Object.assign(this, carInfo)
      Car.carRef=this
    }
  }

  const carInfo1:ICar = {
    owner: 'Ivan',
    model: 'BMW',
    number: 'AR777'
  }
  const carInfo2:ICar = {
    owner: 'Peter',
    model: 'Audi',
    number: 'PR345'
  }

  const car = new Car(carInfo1)
  const car2 = new Car(carInfo2)

  console.log(car === car2)
  console.log(car)
  console.log(car2)
}

