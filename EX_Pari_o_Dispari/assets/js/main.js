//console.log('Test');

//- Pari e Dispari

//- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const pOd = prompt("Scegli tra pari o dispari");
const userNumber = prompt("inserisci un numero tra 1 e 5");
let nResult;
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
nResult = npcNumberFunction()
console.log(`il computer ha il numero ${nResult}`);

//- Sommiamo i due numeri 
const sum = Number(userNumber) + Number(nResult);
console.log(`la somma dei numeri é: ${sum}`);

//- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
/**
 * Controlla se il numero é divisibile per 2, ovvero pari
 * @returns {string}
 */
function numberResult() {

    if (sum % 2 == 0) {
        return "pari"
    } else {
        return "dispari"
    }
}
console.log(`il numero sommato é ${numberResult()}`);

//- Dichiariamo chi ha vinto.
if (numberResult() === pOd) {
    //console.log("hai vinto");
    alert("Hai vinto! 🥳")
} else {
    alert("Hai perso! 😔")
    //console.log("hai perso");
}