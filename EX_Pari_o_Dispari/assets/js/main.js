//console.log('Test');

//- Pari e Dispari

//- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const pOd = prompt("Scegli tra pari o dispari");
const userNumber = prompt("inserisci un numero tra 1 e 5");
console.log(`Il giocatore ha scelto ${pOd} ed il numero ${userNumber}`);

//- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
/**
 * Genera un numero random tra 1 e 5
 * @returns {number}
 */
function npcNumberFunction() {
    const npcNumber = Math.floor(Math.random() * 5) + 1;
    return npcNumber
}
console.log(`il computer ha il numero ${npcNumberFunction()}`);

//- Sommiamo i due numeri 
const sum = Number(userNumber) + Number(npcNumberFunction());
console.log(`la somma dei numeri é: ${sum}`);

//- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
let numResult;
if (sum % 2 == 0) {
    numResult = "pari"

} else {
    numResult = "dispari"
}
console.log(`il numero sommato é ${numResult}`);

//- Dichiariamo chi ha vinto.
if (numResult === pOd) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}