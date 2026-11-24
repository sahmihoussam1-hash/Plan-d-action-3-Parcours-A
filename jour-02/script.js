function estimerBijou(poids, prixGramme) {
    const total = poids * prixGramme;
    return Math.round(total * 100) / 100;
}
// console.log(estimerBijou(0.333, 600));

function validerPoids(valeur){
    if (valeur === ""){
        return "Le poids est obligatoire";
    }
    if (isNaN(Number(valeur))){
        return "Le poids doir etre un nombre";
    }
    if (Number(valeur) <= 0) {
        return "Le poids doit etre positif";
    }
    return "";
}

console.log(estimerBijou(1.5,650));
console.log(estimerBijou(2.5, 612.4));
console.log(estimerBijou(0.333, 600));
console.log(validerPoids(""));
console.log(validerPoids("abc"));
console.log(validerPoids("-3"));
console.log(validerPoids("2.5"));