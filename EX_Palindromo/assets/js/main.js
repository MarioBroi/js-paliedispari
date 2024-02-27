//console.log('Test');

//- Palidroma

//    - Chiedere all’utente di inserire una parola 
//Definiamo la varriabile di input
const string = prompt('Inserisci una parola: ');
//console.log(string);


//    - Creare una funzione per capire se la parola inserita è palindroma
function palindromo(str) {

    // ottieni la lunghezza della stringa  
    const len = string.length;

    // usa un ciclo per dividere a metá la stringa  
    for (let i = 0; i < len / 2; i++) {

        // controlla che il primo e l'ultimo carattere sono uguali  
        if (string[i] !== string[len - 1 - i]) {
            alert(`La parola ${string} non é palindroma`);
        }
    }
    alert(`La parola ${string} é palindroma`);
}

//Definiamo la varriabile di output
const value = palindromo(string);
//console.log(value);