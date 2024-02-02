/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log('----ESERCIZIO 1----');

const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log('----ESERCIZIO 2----');

pets.sort();

console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log('----ESERCIZIO 3----');

pets.reverse();

console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log('----ESERCIZIO 4----');

let x = pets.shift('');

console.log(pets);

pets.push(x);

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log('----ESERCIZIO 5----');

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'FF 123 TSA', 'PD 456 BAG', 'VP 789 LSR';
}

console.log(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log('----ESERCIZIO 6----');

const newCar = {
  brand: 'Ferrari',
  model: 'SF90',
  color: 'red',
  trims: ['ultra', 'leggera'],
};

cars.push(newCar);

console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'FF 123 TSA', 'PD 456 BAG', 'VP 789 LSR', 'FS 012 RUL';
}

console.log(cars);

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.trims.length > 0) {
    car.trims.pop();
  }
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log('----ESERCIZIO 7----');

const justTrims = []

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.trims.length > 0) {
    justTrims.push(car.trims[0]);
  }
}

console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log('----ESERCIZIO 8----');

for (let i = 0; i < cars.length; i++) {
  const firstLetter = cars[i].color.charAt(0).toLowerCase();

  if (firstLetter === 'b') {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log('----ESERCIZIO 9----');

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 66, 313, 321, 32, 105,
]

let i = 0

while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log('----ESERCIZIO 10----');

const charactersArray = ['a', 'n', 'c', 'l', 's'];

const alfabetoItaliano = 'abcdefghilmnopqrstuvz';

const posizionNellArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const character = charactersArray[i].toLowerCase();

  switch (character) {
    case 'a':
      posizionNellArray.push(alfabetoItaliano.indexOf('a') + 1);
      break;
    case 'b':
      posizionNellArray.push(alfabetoItaliano.indexOf('b') + 1);
      break;
    case 'c':
      posizionNellArray.push(alfabetoItaliano.indexOf('c') + 1);
      break;
    case 'd':
      posizionNellArray.push(alfabetoItaliano.indexOf('d') + 1);
      break;
    case 'e':
      posizionNellArray.push(alfabetoItaliano.indexOf('e') + 1);
      break;
    case 'f':
      posizionNellArray.push(alfabetoItaliano.indexOf('f') + 1);
      break;
    case 'g':
      posizionNellArray.push(alfabetoItaliano.indexOf('g') + 1);
      break;
    case 'h':
      posizionNellArray.push(alfabetoItaliano.indexOf('h') + 1);
      break;
    case 'i':
      posizionNellArray.push(alfabetoItaliano.indexOf('i') + 1);
      break;
    case 'l':
      posizionNellArray.push(alfabetoItaliano.indexOf('l') + 1);
      break;
    case 'm':
      posizionNellArray.push(alfabetoItaliano.indexOf('m') + 1);
      break;
    case 'n':
      posizionNellArray.push(alfabetoItaliano.indexOf('n') + 1);
      break;
    case 'o':
      posizionNellArray.push(alfabetoItaliano.indexOf('o') + 1);
      break;
    case 'p':
      posizionNellArray.push(alfabetoItaliano.indexOf('p') + 1);
      break;
    case 'q':
      posizionNellArray.push(alfabetoItaliano.indexOf('q') + 1);
      break;
    case 'r':
      posizionNellArray.push(alfabetoItaliano.indexOf('r') + 1);
      break;
    case 's':
      posizionNellArray.push(alfabetoItaliano.indexOf('s') + 1);
      break;
    case 't':
      posizionNellArray.push(alfabetoItaliano.indexOf('t') + 1);
      break;
    case 'u':
      posizionNellArray.push(alfabetoItaliano.indexOf('u') + 1);
      break;
    case 'v':
      posizionNellArray.push(alfabetoItaliano.indexOf('v') + 1);
      break;
    case 'z':
      posizionNellArray.push(alfabetoItaliano.indexOf('z') + 1);
      break;
    default:
      posizionNellArray.push(null);
  }
}

console.log(posizionNellArray);
