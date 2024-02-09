/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('***ESERCIZIO A***');

let sum = 10 + 20;

console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('***ESERCIZIO B***');

let random = Math.floor(Math.random() * 21);

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('***ESERCIZIO C***');

let me = {
  name: 'Lucian Andrei',
  surname: 'Oprica',
  age: 22,
}

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('***ESERCIZIO D***');

delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('***ESERCIZIO E***');

me.skills = ['HTML', 'CSS', 'JAVASCRIPT'];

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('***ESERCIZIO F***');

me.skills.push('Skill');

console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('***ESERCIZIO G***');

me.skills.pop();

console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('***ESERCIZIO 1***');

const dice = () => {
  const numeroCasuale = Math.floor(Math.random() * 6) + 1;
  return numeroCasuale;
}

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('***ESERCIZIO 2***');

const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } return num2;
};

console.log(whoIsBigger(9, 7));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('***ESERCIZIO 3***');

const splitMe = (stringa) => {
  const lista = stringa.split(" ");
  return lista;
}

console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('***ESERCIZIO 4***');

const deleteOne = (stringa, booleano) => {
  if (booleano) {
    return stringa.substring(1);
  } return stringa.substring(0, stringa.length - 1);
}

console.log(deleteOne('Parola', false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log('***ESERCIZIO 5***');

const onlyLetters = (stringa) => {
  const stringaModificata = stringa.replace(/[0-9]/g, '');
  const stringaOttimizzata = stringaModificata.trim('');
  return stringaOttimizzata;
}

console.log(onlyLetters('ho 22 anni'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('***ESERCIZIO 6***');

const isThisAnEmail = (stringa) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(stringa);
}

console.log(isThisAnEmail('pippo@plutocom'));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('***ESERCIZIO 7***');

const giornoOdierno = new Date();

const giorniDellaSettimana = [
  'Domenica',
  'Lunedì',
  'Martedì',
  'Mercoledì',
  'Giovedì',
  'Venerdì',
  'Sabato'];

const whatDayIsIt = () => {
  const indiceDelGiorno = giornoOdierno.getDay();
  const nomeDelGiornOdierno = giorniDellaSettimana[indiceDelGiorno];

  return nomeDelGiornOdierno;
}


console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('***ESERCIZIO 8***');

const rollTheDices = (n) => {
  const valori = [];
  let somma = 0;

  for (let i = 0; i < n; i++) {
    const risultato = dice();
    valori.push(risultato);
    somma += risultato;
  } return {
    somma: somma,
    valori: valori
  }
}

console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log('***ESERCIZIO 9***');

const howManyDays = (dataDiPartenza) => {

  const dataCorrente = new Date();
  const differenzaInGiorni = Math.floor((dataCorrente - dataDiPartenza) / (1000 * 60 * 60 * 24));

  return differenzaInGiorni;
}

console.log(howManyDays(new Date('2024-01-01')));



/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log('***ESERCIZIO 10***');

const isTodayMyBirthday = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  return currentDay === 23 && currentMonth === 1;
}

console.log(isTodayMyBirthday());


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('***ESERCIZIO 11***');

const deleteProp = (oggetto, stringa) => {
  delete oggetto[stringa];
  return oggetto;
}

let persona = {
  Nome: 'Pippo',
  Cognome: 'Verdi',
  Eta: 25
}
console.log(deleteProp(persona, 'Cognome'));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('***ESERCIZIO 12***');

const newestMovie = (array) => {
  let anno = 1900;
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i].Year) > anno) {
      anno = Number(array[i].Year);
    }
  }
  return anno;
}

console.log(newestMovie(movies));


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log('***ESERCIZIO 13***');

const countMovies = (array) => {
  const numeroFilm = array.length;
  return numeroFilm;
}

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('***ESERCIZIO 14***');
let arrayAnni = [];
const onlyTheYears = (array) => {
  for (let i = 0; i < array.length; i++) {
    arrayAnni.push(array[i].Year);
    arrayAnni.sort();
  } return arrayAnni;
}

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('***ESERCIZIO 15***');
let array
const onlyInLastMillennium = (array) => {

  return array.filter((movie) => {
    return parseInt(movie.Year) <= 2000;
  })
}

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log('***ESERCIZIO 16***');

const sumAllTheYears = (array) => {
  const sommaTotale = array.reduce((acc, curr) => acc + parseInt(curr.Year), 0);
  return sommaTotale;
}

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('***ESERCIZIO 17***');

const searchByTitle = (array, stringa) => {
  let trova = array.filter(movie => movie.Title.toLowerCase().includes(stringa.toLowerCase()));
  return trova;
}

console.log(searchByTitle(movies, 'lord'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log('***ESERCIZIO 18***');

const searchAndDivide = (array, stringa) => {
  const match = [];
  const unmatch = [];
  for (let i = 0; i < array.length; i++) {
    const movieTitle = array[i].Title.toLowerCase();
    if (movieTitle.includes(stringa.toLowerCase())) {
      match.push(movies[i]);
    } else {
      unmatch.push(movies[i]);
    }
  } return { match, unmatch };

}

console.log(searchAndDivide(movies, 'lord'));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('***ESERCIZIO 19***');

const removeIndex = (array, n) => {
  array.splice(n, 1);
  return array;
}

console.log(removeIndex(movies, 4));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('***ESERCIZIO 20***');

const selectContainer = () => {
  const elementoContainer = document.getElementById('container');
  return elementoContainer;
}

console.log(selectContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log('***ESERCIZIO 21***');

const selectTagTd = () => {
  const elementoTd = document.getElementsByTagName('td');
  return elementoTd;
}

console.log(selectTagTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('***ESERCIZIO 22***');

const stampa = () => {
  const valoreTd = document.getElementsByTagName('td');
  for (let i = 0; i < valoreTd.length; i++) {
    const textContent = valoreTd[i].textContent;
    console.log(textContent);
  }
}
stampa();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log('***ESERCIZIO 23***');

const coloraBackground = () => {
  const links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = 'red';
  }
}

coloraBackground();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log('***ESERCIZIO 24***');

const aggiungiElementoMyList = () => {
  const lista = document.getElementById('myList');
  for (let i = 0; i < 10; i++) {
    const nuovoElemento = document.createElement('li');
    nuovoElemento.innerText = i;
    lista.appendChild(nuovoElemento);
  }
}

aggiungiElementoMyList();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log('***ESERCIZIO 25***');
/*
const svuotaLista = () => {
  const lista = document.getElementById('myList');
  lista.innerHTML = '';
}

svuotaLista();
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log('***ESERCIZIO 26***');

const aggiungiClasse = () => {
  const elementiTr = document.getElementsByTagName('tr');

  for (let i = 0; i < elementiTr.length; i++) {
    elementiTr[i].classList.add('test');
  }
}

aggiungiClasse();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log('***ESERCIZIO 27***');

const halfTree = (altezza) => {
  if (altezza <= 0) {
    console.log("Altezza non valida.");
    return;
  }

  for (let i = 1; i <= altezza; i++) {
    let fila = '';
    for (let j = 1; j <= i; j++) {
      fila += '*';
    }
    console.log(fila);
  }
}

halfTree(8);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log('***ESERCIZIO 28***');

const tree = (altezza) => {
  if (altezza <= 0) {
    console.log("Altezza non valida.");
    return;
  }
  for (let i = 1; i <= altezza; i++) {
    let fila = '';

    for (let j = altezza - i; j > 0; j--) {
      fila += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      fila += '*';
    }
    console.log(fila);
  }
}
tree(10);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log('***ESERCIZIO 29***');

const isItPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {

    if (num % i === 0) {
      return false;
    }
    return true;
  }
}

console.log(isItPrime(4));