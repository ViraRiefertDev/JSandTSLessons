"use strict";
//Обчислити значення виразів
const a =parseFloat(prompt('Введіть а: '))
const b =parseFloat(prompt('Введіть b: '))
const c =parseFloat(prompt('Введіть c: '))

const s1 = a+12+b;
const s2 = ((a+b)/(2*a))**(1/2);
const s3 = ((a+b)*c)**(1/3);
const s4 = Math.sin(a/(-b))

document.write(
  `
  <ol>
    <li><p>s1 = a+12+b = ${s1}</p></li>
    <li><p>s2 = ((a+b)/(2*a))^(1/2) = ${s2}</p></li>
    <li><p>s3 = ((a+b)*c)^(1/3) = ${s3}</p></li>
    <li><p>s4 = sin(a/(-b)) = ${s4}</p></li>
  </ol>
  `
)
