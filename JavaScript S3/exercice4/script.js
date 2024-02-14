function exerciceTableau() {
    var T = [17, 38, 10, 25, 72];

    // Trier et afficher le tableau
    T.sort(function(a, b) {
        return a - b;
    });
    console.log("Tableau trié :", T);

    // Ajouter l'élément 12 et afficher le tableau
    T.push(12);
    console.log("Tableau avec élément 12 ajouté :", T);

    // Renverser et afficher le tableau
    T.reverse();
    console.log("Tableau renversé :", T);

    // Afficher l'indice de l'élément 17
    console.log("Indice de l'élément 17 :", T.indexOf(17));

    // Enlever l'élément 38 et afficher le tableau
    T.splice(T.indexOf(38), 1);
    console.log("Tableau avec élément 38 enlevé :", T);

    // Afficher le sous-tableau du 2ème au 3ème élément
    console.log("Sous-tableau du 2ème au 3ème élément :", T.slice(1, 3));

    // Afficher le sous-tableau du début au 2ème élément
    console.log("Sous-tableau du début au 2ème élément :", T.slice(0, 2));

    // Afficher le sous-tableau du 3ème élément à la fin de la liste
    console.log("Sous-tableau du 3ème élément à la fin de la liste :", T.slice(2));
}

// Appeler la fonction pour effectuer les actions sur le tableau
exerciceTableau();
