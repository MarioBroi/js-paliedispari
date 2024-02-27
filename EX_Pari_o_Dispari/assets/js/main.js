//console.log('Test');

//- Pari e Dispari

//- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const pOd = prompt("Scegli tra pari o dispari");
console.log(pOd);

const userNumber = prompt("inserisci un numero tra 1 e 5");
console.log(userNumber);

//- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
const npcNumber = Math.floor(Math.random() * 5) + 1;
console.log(npcNumber);

//- Sommiamo i due numeri 
const sum = Number(userNumber) + Number(npcNumber);
console.log(sum);

//- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
let numResult;
if (sum % 2 == 0) {
    numResult = "pari"

} else {
    numResult = "dispari"
}
console.log(numResult);

//- Dichiariamo chi ha vinto.
if (numResult === pOd) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}