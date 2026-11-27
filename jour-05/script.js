const catalogue = [
  { id: 1, titre: "Bague argent", prix: 350, statut: "disponible" },
  { id: 2, titre: "Collier perles", prix: 1850, statut: "vendu" },
  { id: 3, titre: "Bracelet cuir", prix: 120, statut: "disponible" },
  { id: 4, titre: "Boucles d'oreilles or", prix: 2400, statut: "disponible" },
  { id: 5, titre: "Pendentif main de Fatma", prix: 180, statut: "réservé" },
  { id: 6, titre: "Montre dorée", prix: 950, statut: "vendu" },
//   { id: 7, titre: "Test", prix: 100, statut: "disponible" }
];

function afficher() {
    const liste = document.getElementById("liste");
    const total = document.getElementById("total");

    liste.textContent = "";

    catalogue.forEach(a => {
        const li = document.createElement("li");
        li.textContent = a.titre + " - " + a.prix + " DH";
        liste.append(li);
    });
   
    const somme = catalogue.reduce((acc, a) => acc + a.prix, 0);
    total.textContent = "Total : " + somme + " DH";
}

afficher();