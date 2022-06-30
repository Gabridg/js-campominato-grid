console.log('JS OK')

/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Procediamo milestone per milestone senza invertire l'ordine.
Cerchiamo di fare almeno un commit per ogni milestone!


# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Note:
- questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle ;)
Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento
*/

const playButton = document.getElementById('play-button');
const griglia = document.getElementById('griglia');

function createCell(number) {
    const cell = document.createElement('div');
    cell.className = 'box';
    cell.innerText = number;

    return cell;
}

const rows = 10;
const cols = 10;
const totalCols = rows * cols;

playButton.addEventListener('click', function () {
    for (let i = 1; i <= totalCols; i++) {
        const newCols = createCell(i);

        newCols.addEventListener('click', function (event) {
            event.target.classList.toggle('clicked');
            console.log('Numero Casella Scelta: ' + newCols.innerText)
        })
        griglia.appendChild(newCols);
    }
})