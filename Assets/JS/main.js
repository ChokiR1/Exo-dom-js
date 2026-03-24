let taches = ["Faire les courses", "Apprendre JavaScript", "Ranger la chambre"];

let listeTaches = document.getElementById("listeTaches");
let formulaire = document.getElementById("formulaire");
let champTache = document.getElementById("champTache");

function afficherTaches() {
    listeTaches.innerHTML = "";

    for (let i = 0; i < taches.length; i++) {
        let li = document.createElement("li");
        li.textContent = taches[i] + " ";

        let boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer";

        boutonSupprimer.addEventListener("click", function () {
            taches.splice(i, 1);
            afficherTaches();
        });

        li.appendChild(boutonSupprimer);
        listeTaches.appendChild(li);
    }
}

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    let nouvelleTache = champTache.value;

    if (nouvelleTache !== "") {
        taches.push(nouvelleTache);
        champTache.value = "";
        afficherTaches();
    }
});

afficherTaches();