function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    var nombreAleatoire = entierAleatoire(0, 10);
    var essaisRestants = 3;

    for (var i = 0; i < 3; i++) {
        var essai = parseInt(prompt("Devinez le nombre (entre 0 et 10). Vous avez " + essaisRestants + " essai(s) restant(s)."));

        if (essai === nombreAleatoire) {
            alert("Bravo! Vous avez deviné le nombre.");
            return;
        } else if (essai < nombreAleatoire) {
            alert("Le nombre à deviner est plus grand.");
        } else {
            alert("Le nombre à deviner est plus petit.");
        }

        essaisRestants--;
    }

    alert("Vous avez épuisé vos essais. Le nombre à deviner était : " + nombreAleatoire);
}
