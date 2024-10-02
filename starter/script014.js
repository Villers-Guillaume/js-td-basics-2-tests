/*****************************
 * 14 - Les instructions If / Else
 */

// TEST = STRUCTURE DE CONTRÔLE N° 1 = MOYEN DE CONTRÔLER L'EXÉCUTION DES INSTRUCTIONS :
// L'instruction ne s'exécutera que si une certaine condition est remplie (c.-à-d. vraie)

// 1. Exprimez une condition : IF

// 1. Écrivez un test dont la condition est true
// 2. Dans le bloc, affichez "Je suis dans un bloc d'instructions soumis à une condition qui est toujours vraie, je vais donc toujours m'afficher"

// Et l'inverse :
// 1. Écrivez un test dont la condition est false
// 2. Dans le bloc, affichez "Bon, je cause toujours, mais vu que je suis dans un bloc d'instructions soumis à une condition qui est toujours fausse, ce que je dis ne va jamais s'afficher"

// 1. Demandez à l'utilisateur d'entrer un nombre et enregistrez ce nombre (ATTENTION, prenez bien soin qu'il s'agisse bien d'un nombre et pas d'une chaîne de caractères !) dans une constante nombre
// 2. Si ce nombre est positif (et seulement dans ce cas), affichez "… est positif"
const number1 = prompt("Donne-moi un nombre");
if (number1>=0){
    console.log(`${number1} est positif`);
}
// Écrivez un programme qui dit "Bonjour" à l'utilisateur et n'accepte de lui répondre que si celui-ci lui dit "Bonjour" à son tour. Dans ce cas, le programme lui répond "Toi, tu es poli, tu me dis bonjour, je veux bien te parler… Comment t'appelles-tu ?". Il enregistre alors l'entrée dans une variable nom et, seulement si l'utilisateur a bien entré quelque chose dans le champ (il prend la peine de vérifier avant), il lui répond (dans la console), "Je t'aime bien, …".
const userAnswer = prompt("Bonjour");
if (userAnswer==="Bonjour"){
    const firstName = prompt("Toi, tu es poli, tu me dis bonjour, je veux bien te parler… Comment t'appelles-tu ?")
    if (firstName){
        console.log(`Je t'aime bien ${firstName}`)
    }
} else {
    console.log("Tu ne me dis pas Bonjour, tu es un malpoli");
}
// 2. Exprimez une alternative : if / else

// 1. Demandez à l'utilisateur d'entrer un nombre et enregistrez ce nombre dans une constante nombre
// 2. Si ce nombre est positif, affichez "… est positif", sinon, affichez "… est négatif ou nul"
const number2 = prompt("Donne-moi un nombre");
if (number2>0){
    console.log(`${number2} est positif`)
} else {
    console.log(`${number2} est nul ou négatif`)
}

// 1. Initialisez la variable firstName à  John et enregistrez son état civil ('single') dans une variable civilStatus
// 2. Si l'état civil est 'married', affichez "John est marié !", sinon affichez "John va, on l\'espère, bientôt se marier :)"
// 3. Changez l'état civil de John à ('married') et retestez
const firstName2 = "John";
const civilStatus = "single";
if (civilStatus==="married"){
    console.log("John est marrié !");
} else {
    console.log("John va, on l’espère, bientôt se marier");
}
// 1. Créez à présent une variable isMarried pour enregistrer l'état civil de John et, en imaginant qu'il est marié, initialisez-la à true
// 2. Servez-vous à présent de cette variable pour afficher "John est marié !" ou "John va, on l\'espère, bientôt se marier :)" selon qu'il est marié ou pas
// 3. Retestez votre code après avoir changé la valeur de isMarried à false
const isMarried = true;
if (isMarried===true){
    console.log("John est marrié !");
} else {
    console.log("John va, on l’espère, bientôt se marier");
}
// 1. Enregistrez la taille et le poids de John (78 kg, 1.69 m) et de Mark (92 kg, 1.95 m) dans 4 variables
// 2. Calculez leur BMI et affichez, selon le cas, "Le BMI de Mark est plus élevé que celui de John" ou "Le BMI de John est plus élevé que celui de Mark"
const sizeJohn = 1.69;
const weightJohn = 78;
const sizeMark = 1.95;
const weightMark = 92;

const bmiJohn = weightJohn/Math.pow(sizeJohn,2);
const bmiMark = weightMark/Math.pow(sizeMark,2);

if (bmiJohn>bmiMark){
    console.log("Le BMI de Mark est plus élevé que celui de John")
} else if(bmiJohn<bmiMark){
    console.log("Le BMI de John est plus élevé que celui de Mark")
} else{
    console.log("Le BMI de John est égale à celui de Mark")
}
// Écrire un programme qui teste si un nombre entré par l’utilisateur est pair ou impair.
