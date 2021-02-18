const anno = 2021;

// aggiunge un numero random tra 0 e 99
numRandom = Math.round(Math.random()*100);

var Nome = prompt('Mi diresti cortesemente il tuo nome?');

var annoNascita = prompt('In che anno sei nato?')

var Cognome = prompt ('So che ti rompo ma vorrei anche il cognome');

var ColorePref = prompt ('Ultima cosa il tuo colore preferito?');

document.getElementById('my_password').innerHTML = (Nome+Cognome+ColorePref+(anno - annoNascita)+numRandom);