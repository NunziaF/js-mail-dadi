//Chiedi all'utente la sua email e controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato

//Faccio la lista delle mail autorizzate ad accedere
var email = ["a@b.it","b@c.it","c@d.it","d@e.it","e@f.it"];

console.log(email);

//Chiedo all'utente d'inserire la propria email
var emailUtente = prompt("inserisci la tua email");

console.log(emailUtente);

//Creo variabile del messaggio di output
var messaggioMailPresente = "la mail non è corretta";

// Controlla che l'email utente sia all'interno della lista
for (var i = 0; i < email.length; i++) {

  if (emailUtente == email[i]) {
    messaggioMailPresente = "la mail è valida";
  }
}

//messaggio di output
document.getElementById('Accesso').innerHTML = messaggioMailPresente;
