//console.log('Test');

//- Pari e Dispari
function sfida() {
    //- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    /* const pOd = prompt("Scegli tra pari o dispari");
    const userNumber = prompt("inserisci un numero tra 1 e 5"); */
    let pOd = document.getElementById('pari-dispari');
    let valore = pOd.valore;
    let testo = pOd.options[pOd.selectedIndex].text;
    let userNumber = document.getElementById('num').value;
    console.log(`Il giocatore ha scelto ${testo} ed il numero ${userNumber}`);

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
    if (numberResult() === testo) {
        //console.log("hai vinto");
        alert(`Hai vinto! 🥳 Il computer ha scelto il numero ${npcNumberFunction()}`)
    } else {
        alert(`Hai perso! 😔 Il computer ha scelto il numero ${npcNumberFunction()}`)
        //console.log("hai perso");
    }

}