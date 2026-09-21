let vitesse = 0;
let distance = 0;

let acceleration = 0;

const vitesseElement =
    document.getElementById("vitesse");

const distanceElement =
    document.getElementById("distance");

const accelerateur =
    document.getElementById("accelerateur");

const frein =
    document.getElementById("frein");

const urgence =
    document.getElementById("urgence");


/* =========================
   ACCÉLÉRATEUR
========================= */

accelerateur.addEventListener("input", function () {

    acceleration =
        Number(this.value);

});


/* =========================
   FREIN
========================= */

frein.addEventListener("click", function () {

    vitesse -= 10;

    if (vitesse < 0) {
        vitesse = 0;
    }

});


/* =========================
   FREIN D'URGENCE
========================= */

urgence.addEventListener("click", function () {

    vitesse = 0;

    acceleration = 0;

    accelerateur.value = 0;

});


/* =========================
   JEU
========================= */

function jeu() {

    /*
       L'accélération augmente
       progressivement la vitesse.
    */

    if (acceleration > 0) {

        vitesse += 0.05;

    }

    /*
       Limite de vitesse
    */

    if (vitesse > 100) {

        vitesse = 100;

    }

    /*
       Distance parcourue
    */

    distance += vitesse * 0.001;


    /*
       Affichage
    */

    vitesseElement.textContent =
        Math.floor(vitesse) + " km/h";

    distanceElement.textContent =
        Math.floor(distance) + " m";


    requestAnimationFrame(jeu);
}


jeu();
