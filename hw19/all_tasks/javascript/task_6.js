// Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. 
// При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. 
// При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону 
// стрілку спортсмен переміщається у загальний список.


// Список спортсменів...

const allAthletes = [
  { id: 1, name: "Usain Bolt" },
  { id: 2, name: "Michael Phelps" },
  { id: 3, name: "Serena Williams" },
  { id: 4, name: "Lionel Messi" },
  { id: 5, name: "Cristiano Ronaldo" },
  { id: 6, name: "Simone Biles" },
  { id: 7, name: "Roger Federer" },
];

const selectedAthletes = [
  { id: 8, name: "LeBron James" },
  { id: 9, name: "Novak Djokovic" },
  { id: 10, name: "Katie Ledecky" }
];

// --- утіліти для роботи з DOM та даними --- //

function getListElement(isSelected) {
  return document.querySelector(
    isSelected ? '.selected-athletes-list' : '.all-athletes-list'
  );
}

function findAndExtract(athletesArray, id) {
  const index = athletesArray.findIndex(a => a.id === id);
  if (index === -1) return null;
  const [athlete] = athletesArray.splice(index, 1);
  return athlete;
}

// --- створення и рендер елементів --- //

function createAthletesItem(athlete, selected = false) {
  const liElement = document.createElement('li');
  liElement.dataset.id = athlete.id;

  const spanElement = document.createElement('span');
  spanElement.innerText = athlete.name;

  const buttonElement = document.createElement('button');
  const img = document.createElement('img');
  img.classList.add('arrow-img');

  if (selected) {
    liElement.classList.add('selectedAthleteItem');
    img.setAttribute('src', '/hw19/assets/arrow-red.png');
  } else {
    img.setAttribute('src', '/hw19/assets/green-arrow.png');
  }

  buttonElement.append(img);
  liElement.append(spanElement);
  liElement.append(buttonElement);

  return liElement;
}

function renderAthletesList(athletesArray, selected = false) {
  const athletesList = getListElement(selected);
  athletesList.innerHTML = ''; 

  for (const athlete of athletesArray) {
    const li = createAthletesItem(athlete, selected);
    athletesList.append(li);
  }
}

// --- загальна функція переносу --- //

function transferAthlete({ id, liElement, fromSelected }) {
  const fromArray = fromSelected ? selectedAthletes : allAthletes;
  const toArray   = fromSelected ? allAthletes : selectedAthletes;
  const toSelected = !fromSelected;

  const athlete = findAndExtract(fromArray, id);
  if (!athlete) return;

  toArray.push(athlete);

  liElement.remove();

  const toList = getListElement(toSelected);
  toList.append(createAthletesItem(athlete, toSelected));
}

// --- ініціалізація --- //

renderAthletesList(allAthletes, false);
renderAthletesList(selectedAthletes, true);

// --- делегування кликів --- //

function handleClick(e) {
  const btn = e.target.closest('button');
  if (!btn) return;

  const li = btn.closest('li');
  if (!li) return;

  const id = Number(li.dataset.id);
  const isSelected = li.classList.contains('selectedAthleteItem');

  transferAthlete({
    id,
    liElement: li,
    fromSelected: isSelected
  });
}

document.addEventListener('click', handleClick);