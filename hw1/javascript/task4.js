// Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
const lengthCm = parseFloat(prompt('Введіть довжину у сантиметрах:'));
const CM_PER_METER = 100
const METER_PER_KILOMETER = 1000;

const lengthM = lengthCm/CM_PER_METER;
const lengthKm = lengthM/METER_PER_KILOMETER;

document.write(`
    <p>Довжина у сантиметрах: ${lengthCm.toFixed(2)} cм</p>
    <p>Довжина у метрах: ${lengthM.toFixed(2)} м</p>
    <p>Довжина у кілометрах: ${lengthKm.toFixed(5)} км</p>
  `)