// selezioniamo lelemento di output
const ouput = document.getElementById("countdown");
const frase = document.getElementById("instructions");
const random = document.querySelectorAll(".numeri")
const numeroUser = document.getElementById("answers-form")
const inline = document.getElementById("numbers-list")
const form = document.getElementById('answers-form')
const inputUser = document.querySelectorAll('.form-control')
const message = document.getElementById('message')

// settiamo i secondi di partenza
let seconds = 5;

// settiamo il set interval
for (let i = 0; i < random.length; i++) {
    random[i].innerHTML = generaNumRandomRange(1, 50);
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
        inline.classList.add("d-none")
        // setTimeout(() => {
        //    location.reload();
        // }, 1000)

    } else {
        // decrementiamo il valore di seconds
        seconds = seconds - 1;
        ouput.innerHTML = seconds;

        
    }

}, 1000);
faiQualcosa();

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    // creo un contatore di numeri indovinati
    let correctNumbers = [0];
    // creo un ciclo per verificare i numeri inseriti dall'utente
    for (let i = 0; i < inputUser.length; i++) {
        let userValue = parseInt(inputUser[i].value);
        let randomValue = parseInt(random[i].innerHTML);
    // vedo se i numeri inseriti dal utente sono uguali ai numeri random
    if ( userValue === randomValue){
        //aggiungo al contatore il num di numeri indovinati
        correctNumbers++
    } 
    }
    // mostro il messaggio del risultato
    if (correctNumbers > 0){
        message.classList.remove("text-danger")
        message.classList.add("text-success")
        message.innerHTML = `Hai indovinato ${correctNumbers} numeri su 5.`
        
        
    } else {
        message.innerHTML = `Non hai indovinato`
    }
    form.reset(); 
})
form.reset(); 


// FUNZIONI
function faiQualcosa() {
    console.log("ho fatto qualcosa");
}

function generaNumRandomRange(numMax, numMin) {
    const numeroGenerato = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    
    return numeroGenerato
}
