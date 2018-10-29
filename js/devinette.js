/*
Activité : jeu de devinette
*/
 
// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO
 
console.log("Bienvenue dans ce jeu de devinette par Angie B.!");
 
// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
 
// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");
 
// TODO : complétez le programme
 
console.log("Bienvenue dans ce jeu de devinette par Angie B.!");
var nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));
var solution = Math.floor(Math.random() * 100) +1;

for (var i = 1; i <= 6; i++){

    if (nombre === solution){
        console.log("Félicitations ! Le nombre recherché était " + nombre);
        console.log("Vous avez trouvé la solution en " + i + " essai(s)");
        break;
    }

    if (nombre < solution) {
        console.log(nombre + " est trop petit ! Essaie encore !");
    } else {
        console.log(nombre + " est trop grand ! Essaie encore !");
    }

    nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));
    if (i === 6){
        console.log("Perdu...Dommage ...Le nombre recherché était " + solution);
        }
    }