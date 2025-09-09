// Створити окремі функції, які переводять:
// 1) Сантиметри у дюйми;
// 2) Кілограми у фунти;
// 3) Кілометри у милі.



if (confirm('Почати тестування?')) {
  function convertCmToInches(valueInCm){
    return valueInCm/ 2.54
  }

  function convertKgToPounds(valueInKg){
    return valueInKg * 2.20462
  }

  function convertKmToMiles(valueInKm){
    return valueInKm * 0.621371
  }
  const valueInCm=100, valueInKg=100, valueInKm=100;

  const inches = convertCmToInches(valueInCm)
  const pounds = convertKgToPounds(valueInKg)
  const miles = convertKmToMiles(valueInKm)
  document.write(`
    <h2>Сантиметри у дюйми</h2>
    <p>${valueInCm}cm: ${inches.toFixed(2)}inches</p>
    <h2>Кілограми у фунти</h2>
    <p>${valueInKg}kg: ${pounds.toFixed(2)}pounds</p>
    <h2>Кілометри у милі</h2>
    <p>${valueInKm}km: ${miles.toFixed(2)}miles</p>
    `)
}
