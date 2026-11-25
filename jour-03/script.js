const catalogue = [
  { id: 1, titre: "Bague argent", prix: 350, statut: "disponible" },
  { id: 2, titre: "Collier perles", prix: 1850, statut: "vendu" },
  { id: 3, titre: "Bracelet cuir", prix: 120, statut: "disponible" },
  { id: 4, titre: "Boucles d'oreilles or", prix: 2400, statut: "disponible" },
  { id: 5, titre: "Pendentif main de Fatma", prix: 180, statut: "réservé" },
  { id: 6, titre: "Montre dorée", prix: 950, statut: "vendu" }
];

const disponibles1 = [];
for (let i = 0; i < catalogue.length; i++) {
    if (catalogue [i].statut === "disponible") {
        disponibles1.push(catalogue [i]);
    }
}
// console.log(disponibles1)
let article4 = null;
for (let i=0; i < catalogue.length; i++) {
    if (catalogue[i].id === 4) {
        article4 = catalogue[i];
        break;
    }
}
// console.log(article4);

const disponibles2 = catalogue.filter(a => a.statut === "disponible");
const article4in2 = catalogue.find(a => a.id === 4);

console.log("V1-:",disponibles1);
console.log("V1-:",article4);
console.log("V2-:",disponibles2);
console.log("V2-:",article4in2);