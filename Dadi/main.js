//Gioco dei dadi, chi fa di più vince

//Chiedo all'utente di giocare

var nomeGiocatore = prompt("Benvenuto nel gioco dei dadi! Per iniziare a giocare, inserisci il tuo nome e sfida alla sorte il computer!");

//Chiedo al computer di far uscire un numero random tra 1 e 6 assegnato al giocatore

var numeroUtente = Math.floor(Math.random() * 6) + 1;

console.log(numeroUtente);

//Chiedo al computer di far uscire un numero random tra 1 e 6 assegnato al computer

var numeroPc = Math.floor(Math.random() * 6) + 1;

console.log(numeroPc);

//Verifico chi ha il numero più alto
if (numeroUtente > numeroPc){
  msg = nomeGiocatore + " HAI VINTO";
} else {
  msg = "Ha vinto il computer";
}

//Restituisco l'output del vincitore
document.getElementById("Vincitore").innerHTML = msg;
