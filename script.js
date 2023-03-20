/*
1 chiedi e salva in una variabile (numKm) il numero di chilimetri che si vuole percorrere

2 chiedi e salva in una variabile l'eta (age) del passeggero

3 salva il prezzo di ogni kilometro di viaggio (0.21 eur ) in una variabile chiamata prezzoKm

4 moltiplica la variabile prezzokm  per il numero totale di km da percorrere (numKm)  ed ottieni un prezzo finale.
Salva questo risultato in una variabile chiamata prezzoFin

5 se age del passeggero e' minore di 18 anni
prezzoFin1 viene scontato del 20% , aggiorna poi la variabile prezzoFin

6 se age del passeggero e' maggiore di 65 anni
prezzoFin1 viene scontato del 20% aggiorna poi la variabile prezzoFin


*/

const numKm = parseFloat(prompt("Inserisci il numero di chilometri da percorrere"));

const age = parseInt(prompt("Inserisci l'età del passeggero"));

console.log('km da percorrere' , numKm);
console.log('eta passeggero' , age);


const prezzoKm = 0.21;

let prezzoFin1 = numKm * prezzoKm;

console.log( 'prezzo finale' , prezzoFin1);

if (age < 18) {

  prezzoFin1 *= 0.8;

} else if (age > 65) {

  prezzoFin1 *= 0.6;
}



console.log(`Il prezzo finale del biglietto è ${prezzoFin1.toFixed(2)} €`);
