// 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А».

if (confirm('Почати тестування?')) {
  const carNumbers = [
  "AA1234BC",
  "BK5678AA",
  "AM4321KP",
  "CX9999TT",
  "AX1111AX",
  "MM2020MM",
  "AH7777BB",
  "KO1234AA",
  "AP5050PP",
  "ZZ8888ZZ"
];

  const carNumbersWithStartA = carNumbers.filter(el=>el[0]==='A')
  console.log(carNumbersWithStartA)
}
