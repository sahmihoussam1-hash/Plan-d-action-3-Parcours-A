const catalogue = [
  { id: 1, titre: "Bague argent", prix: 350, statut: "disponible" },
  { id: 2, titre: "Collier perles", prix: 1850, statut: "vendu" },
  { id: 3, titre: "Bracelet cuir", prix: 120, statut: "disponible" },
  { id: 4, titre: "Boucles d'oreilles or", prix: 2400, statut: "disponible" },
  { id: 5, titre: "Pendentif main de Fatma", prix: 180, statut: "réservé" },
  { id: 6, titre: "Montre dorée", prix: 950, statut: "vendu" }
];

const titresMajuscules = catalogue.map(a => a.titre.toUpperCase());
console.log("Titres en majuscules :", titresMajuscules);

const totalPrix = catalogue.reduce((acc,a) => acc + a.prix, 0);
console.log("Total des prix :", totalPrix);

const titrePasChers = catalogue
    .filter(a => a.prix < 200)
        .map(a => a.titre);
        console.log("Moins de 200Dh:",titrePasChers);
 