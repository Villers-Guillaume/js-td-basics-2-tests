// Seconde suivante

// Stockez dans trois variables l'heure actuelle, les minutes actuelles et les secondes actuelles.
// Incrémentez les secondes actuelles de 1 pour obtenir la seconde suivante.
//     Vérifiez si les secondes actuelles étaient égales à 59 (la dernière seconde de la minute).
// Si les secondes actuelles étaient égales à 59, réinitialisez les secondes à 0.
// Vérifiez si les minutes actuelles étaient égales à 59 (la dernière minute de l'heure).
// Si les minutes actuelles étaient égales à 59, réinitialisez les minutes à 0.
// Vérifiez si l'heure actuelle était égale à 23 (la dernière heure de la journée).
// Si l'heure actuelle était égale à 23, réinitialisez l'heure à 0 (minuit).
//     Sinon, incrémentez l'heure actuelle.
// Affichez la nouvelle heure, les minutes et les secondes dans la console.
let hour = 12;
let minutes = 18;
let second = 40
const secondNext = second++;
if (second===59){
    second=0;
}
if(minutes===59){
    minutes=0;
}
if(hour===23){
    hour = 0;
} else {
    hour++;
}

console.log(`La nouvelle heure est ${hour}h${minutes}min${second}sec`);
