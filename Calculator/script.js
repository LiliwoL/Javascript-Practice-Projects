/**
 * 
 * Projet Calculatrice
 * 
 */


// Définition des variables
let equal_pressed = 0;

// Référence à tous les boutons SAUF et DEL
let button_input = document.querySelectorAll(".input-button");


// Référence aux boutons input,equal,clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal"); // Bouton =
let clear = document.getElementById("clear"); // Bouton AC
let erase = document.getElementById("erase"); // Bouton DEL


// Au chargement, la valeur est à vide
window.onload = () => {
    input.value = "";
};

// Ajout d'un eventListener pour chacun des boutons avec un forEach
button_input.forEach(
    (button_class) => {
        button_class.addEventListener(
            "click", () => {
                if (equal_pressed == 1) {
                    input.value = "";
                    equal_pressed = 0;
                }
            // On ajoute la valeur du bouton cliqué à la zone de calcul
            // La valeur est soit numéraire, soit un signe de calcul
            input.value += button_class.value;
        });
    }
);

// Action du bouton =
equal.addEventListener("click", () => {
    // La touche égal a été cliquée
    equal_pressed = 1;

    let inp_val = input.value;
    try {
        // Utilisation de la fonction eval() pour calculer le contenu de la zone de calcul
        let solution = eval(inp_val);

        // Teste si la solution est un entier ou non
        if (Number.isInteger(solution)) {
            input.value = solution;
        } else {
            // Arrondi à 2 chiffres après la virgule
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        // Si la saisie est invalie
        alert("Saisie invalide");
    }
});

// Action du bouton AC
clear.addEventListener("click", () => {
    input.value = "";
});

// Action du bouton DEL
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});