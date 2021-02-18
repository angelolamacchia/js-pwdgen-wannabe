// costante anno in cui siamo
const anno = 2021;

// aggiunge un numero random tra 0 e 99
var numRandom = Math.round(Math.random()*100);
//variabile nome
var nome = prompt('Mi diresti cortesemente il tuo nome?');
//variabile anno di nascita
var annoNascita = prompt('In che anno sei nato?')
//variabile cognome
var cognome = prompt ('So che ti rompo ma vorrei anche il cognome');
//variabile colore preferito
var colorePref = prompt ('Ultima cosa il tuo colore preferito?');

//risultato visibile in my_password
document.getElementById('my_password').innerHTML =
(nome+cognome+colorePref+ (anno - parseInt(annoNascita)) +numRandom);