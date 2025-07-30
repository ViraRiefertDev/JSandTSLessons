// Дано кількість секунд, що пройшла від початку доби. Визначити
// скільки це годин і хвилин.

const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;
const secondsSinceMidnight = parseInt(prompt('кількість секунд, що пройшла від початку доби'));
const minutesSinceMidnight = Math.floor(secondsSinceMidnight / SECONDS_PER_MINUTE);

const hours = Math.floor(minutesSinceMidnight / MINUTES_PER_HOUR);
const minutes = minutesSinceMidnight % MINUTES_PER_HOUR;

document.write(`
    <p>Кількість секунд, що пройшла від початку доби: ${secondsSinceMidnight}</p>
    <p>Кількість годин: ${hours}</p>
    <p>Кількоість хвилин: ${minutes}</p>
  `)