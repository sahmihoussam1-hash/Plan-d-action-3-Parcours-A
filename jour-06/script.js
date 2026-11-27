const catalogue = [
  { id: 1, titre: "Bague argent", prix: 350, statut: "disponible" },
  { id: 2, titre: "Collier perles", prix: 1850, statut: "vendu" },
  { id: 3, titre: "Bracelet cuir", prix: 120, statut: "disponible" },
  { id: 4, titre: "Boucles d'oreilles or", prix: 2400, statut: "disponible" },
  { id: 5, titre: "Pendentif main de Fatma", prix: 180, statut: "réservé" },
  { id: 6, titre: "Montre dorée", prix: 950, statut: "vendu" }
];

const liste = document.getElementById("liste");
const total = document.getElementById("total");

function afficher() {
    liste.textContent = "";

    catalogue.forEach(a => {
        const li = document.createElement("li");
        li.textContent = a.titre + " - " + a.prix + " DH";
        liste.append(li);
    });

    const somme = catalogue.reduce((acc, a) => acc + a.prix, 0);
    total.textContent = "Total : " + somme + " DH";
}


const formulaire = document.getElementById("formulaire");
const champTitre = document.getElementById("titre");
const champPrix = document.getElementById("prix");
const erreurs = document.querySelectorAll(".erreur");
const erreurTitre = erreurs [0];
const erreurPrix = erreurs [1];

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    erreurTitre.textContent = "";
    erreurPrix.textContent = "";

    const titre = champTitre.value.trim();
    const prix = Number(champPrix.value);
    let valide = true;

    if (titre.length < 3 || titre.length > 80) {
        erreurTitre.textContent = "Le titre doit contenir entre 3 et 80 caracteres";
        valide = false;
    }

  
    if (champPrix.value.trim() === "" || isNaN(prix) || prix <= 0) {
        erreurPrix.textContent = "Le prix doit etre un nombre strictement positif";
        valide = false;
    }

    if (valide === false) {
        return;
    }
    catalogue.push({
        id: catalogue.length + 1,
        titre: titre,
        prix: prix,
        statut: "disponible"
    });
    liste.textContent = "";
    afficher();

    formulaire.reset();
});
afficher();