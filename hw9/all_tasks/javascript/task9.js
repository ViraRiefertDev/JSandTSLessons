// 9. Дано масив імен. Сформувати масив з перших літер цих імен..

if (confirm('Почати тестування?')) {
  const names = [
  "John",
  "Emily",
  "Michael",
  "Sophia",
  "David",
  "Olivia",
  "James",
  "Emma",
  "Daniel",
  "Ava",
  "Matthew",
  "Isabella",
  "Christopher",
  "Mia",
  "Andrew"
];

const namesFirstLetter = names.map(e=>e[0])
console.log(namesFirstLetter)

}
