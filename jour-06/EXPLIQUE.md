# Jour 6 : Formulaire 

- j'ecoute l'evenement submit du formulaire et j'appelle event.preventDefault() pour que la page ne se charge pas.
- je verifie le titre (entre 3 et 80 car) et les prix (nombre strictement positif).
- si tout est bon, j ajoute l'article avec push (status dispnible), je vide la liste avec textContent = "" puis je rappelle afficher().
- Blocage : la valeur d un champ est toujours du texte, donc il faut la convertir avec Number() avant de tester le prix. 
