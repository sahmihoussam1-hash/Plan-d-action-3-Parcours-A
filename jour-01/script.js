const prix = [120, 85, 300, 45, 210];

let total = 0;
let max = prix[0];
let compteur = 0;

for (let i = 0; i < prix.length; i++) {
    total = total + prix [i];

    if (prix [i] > max) {
        max = prix[i];
    }

    if (prix [i] > 100) {
        compteur++;
    }
}
console.log("Total:",total);
console.log("Prix le plus eleve:",max);
console.log("Prix seperieur a 100:",compteur);