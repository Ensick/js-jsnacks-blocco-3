
// *Snack1*
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// *Snack2*
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// *Snack3* (Bonus)
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

// *Snack4 (Bonus)*
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// Interrompi il ciclo appena il nome è stato trovato.

// Snack-1

/* const arrayNumero = [];

console.log(arrayNumero)

let somma = 0;

let x = 0

while (somma < 50){

    let inserisciNumero = parseInt(prompt("Inserisci un numero"));

    arrayNumero.push(inserisciNumero)

    somma += arrayNumero[x]

    x++;

    console.log(somma)

} */

/* Snack-2 */

/* const arrayNumero = [];

console.log(arrayNumero)

let somma = 0;

let x = 0

while (x < 5){

    let inserisciNumero = parseInt(prompt("Inserisci un numero"));

    arrayNumero.push(inserisciNumero)

    somma += arrayNumero[x]

    console.log(somma)

    x++;

}

document.getElementById("risultato").innerText = `${somma}` */

/* Snack-3 */


/* let numeroUtente = parseInt(prompt("Inserisci un numero"));

let x = 0

while(x < numeroUtente){

    const contNumeri = []

    for(let i = 0; i < 10; i++){

        let numeriRandom = Math.floor(Math.random()* 100) + 1;

        contNumeri.push(numeriRandom)

    }

    x++;

        console.log(contNumeri)
}

 */
