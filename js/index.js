// --- array of objects
const simpsons = [
  {
    id: '13e25ab',
    name: 'Homer',
    img: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
    age: 45,
    income: 3500,
  },
  {
    id: '13dfgd5ab',
    name: 'Marge',
    img: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205',
    age: 43,
    income: 0,
  },
  {
    id: 'gwd4gd5ab',
    name: 'Ape',
    img: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593',
    age: 83,
    income: 500,
  },
  {
    id: 'dr325ab',
    name: 'Bart',
    img: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
    age: 15,
    income: 50,
  },
  {
    id: 'dr3289809',
    name: 'Bart',
    img: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
    age: 30,
    income: 50,
  },
  {
    id: '13erf25ab',
    name: 'Lisa',
    img: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
    age: 12,
    income: 35,
  },
];
// --- array of numbers
const numbers = [512, 77, 333, 49, 81, 4, -12, 3.14, 1000, 31, 99];

// --- array of strings
const strings = [
  'HTML',
  'React',
  'CSS',
  'Next.js',
  'MongoDB',
  'styled components',
  'mongoose',
  'next-auth',
  'Visual Studio Code',
];

const characterList = document.querySelector("[data-js='characterList']");
const numberList = document.querySelector("[data-js='numberList']");
const numberOutput = document.querySelector("[data-js='number-output']");
const stringList = document.querySelector("[data-js='stringList']");
const stringOutput = document.querySelector("[data-js='string-output']");
const findOutput = document.querySelector("[data-js='find-output']");

numbers.forEach((number) => {
  const card = document.createElement('li');
  card.classList.add('tag');
  card.innerHTML = `<span>${number}</span>`;
  numberList.append(card);
});

strings.forEach((number) => {
  const card = document.createElement('li');
  card.classList.add('tag');
  card.innerHTML = `<span>${number}</span>`;
  stringList.append(card);
});

simpsons.forEach((simpson) => {
  const card = document.createElement('li');
  card.classList.add('character');
  card.innerHTML = `<p class="title">${simpson.name}</p>
  <img
    src=${simpson.img}
    alt=${simpson.name}
    height="100"
  />
  <p>Age: ${simpson.age}</p>
  <p>Income: ${simpson.income} $</p>`;
  characterList.append(card);
});

// ✨ includes()
const numberToCheck = 333;

const numberIsIncluded = numbers.includes(numberToCheck, 1);
console.log('is included', numberIsIncluded);

numberOutput.textContent = numberIsIncluded
  ? `Yes, ${numberToCheck} is included`
  : `No, ${numberToCheck} is not included`;

const stringToCheck = 'Sabine';

const stringIsIncluded = strings.includes(stringToCheck);

stringOutput.textContent = stringIsIncluded
  ? `Yes, ${stringToCheck} is included`
  : `No, ${stringToCheck} is not included`;

// The OR issue - that's correct 👍
const isCSSorHTMLIncluded = strings.includes('HTML') || strings.includes('CSS');

// The OR issue - that's not correct 👎
const isCSSorHTMLIncludedNOT = strings.includes('HTML' || 'CSS');

// ✨ find()
const objectToFind = simpsons.find((simpson) => simpson.age < 40 && simpson.name.startsWith('B'));

console.log('is type of: ', typeof objectToFind);
console.log(objectToFind);

findOutput.textContent = objectToFind ? `Yes, it's '${objectToFind.name}'` : 'Cannot find any!';
