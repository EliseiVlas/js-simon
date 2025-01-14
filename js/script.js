// selezioniamo lelemento di output
const ouput = document.getElementById("countdown");
const frase = document.getElementById("instructions");
const random = document.querySelectorAll("numeri")
const numeroUser = document.getElementById("answers-form")

// settiamo i secondi di partenza
let seconds = 5;

// settiamo il set interval

function generaNumRandomRange(numMax, numMin) {
    const numeroGenerato = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    
    return numeroGenerato
}


const countDown = setInterval(() => {
    // se sono alla fine 
    if (seconds === 0) {
        // fermo l'esecuzione
        clearInterval(countDown);
        // dico buon anno
        frase.classList.add("none");
        ouput.innerHTML = "Inserisci piu numeri possibili che ricordi";
        numeroUser.classList.remove("d-none")
        numeroUser.classList.add("d-inline")
        

    } else {
        // decrementiamo il valore di seconds
        seconds = seconds - 1;
        ouput.innerHTML = seconds;

        
        
    }

}, 1000);

faiQualcosa();



// FUNZIONI
function faiQualcosa() {
    console.log("ho fatto qualcosa");
}
