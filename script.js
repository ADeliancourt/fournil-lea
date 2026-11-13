//Déclaration des constantes
const boutonHoraires = document.querySelector("#bouton-horaires"); //Recherche du bouton "bouton-horaires"
const boutonCorbeille = document.querySelector("#bouton-corbeille"); //Recherche du bouton "bouton-corbeille"
const tableHoraires = document.querySelector("#table-horaires"); //Recherche de la table "table-horaires"
const boutons = document.querySelectorAll(".produit-bouton"); //Recherche des boutons "produit-bouton"
const compteur = document.querySelector("#compteur"); //Recherche du "compteur"

//Déclaration des variables
let nombre =  0; //nombre d'élément dans le compteur

//affiche le texte
console.log("Le script est chargé");
//Recherche de l'évènement "click" sur le bouton-horaires
boutonHoraires.addEventListener("click", function() {
    //Affiche dans la console "Clic !" par clic sur le bouton "bouton-horaires"
    console.log("Clic !");
    //Ajoute ou retire la classe "cache" pour la table des horaires
    tableHoraires.classList.toggle("cache");
    document.getElementById("bouton-horaires").textContent = "Masquer les horaires";
    
    //Si boutonHoraires = True, alors blur() et false
    if (boutonHoraires.dataset.clique === "true") { //"===" permet la comparaison
        boutonHoraires.blur(); //blur() permet de retirer le focus
        boutonHoraires.dataset.clique = "false"; //change l'état en "false"
        document.getElementById("bouton-horaires").textContent = "Afficher les horaires";
    } else {
        boutonHoraires.dataset.clique = "true"; //change l'état en "true"
    }
});

//Vidage du panier
boutonCorbeille.addEventListener("click", function() {
    //Si boutonHoraires = True, alors blur() et false
    if (nombre === 0) { //"===" permet la comparaison
        alert("Le panier est déjà vide !");
    } else {
        nombre = 0;
        compteur.textContent = nombre;
    }
});

//Pour chaque clic sur un "produit-bouton", un incrément de 1 dans le panier.
for (const bouton of boutons){
    bouton.addEventListener("click", function(){
        nombre = nombre + 1;
        compteur.textContent = nombre;
        //console.log("Ajouté au panier");
    })
}