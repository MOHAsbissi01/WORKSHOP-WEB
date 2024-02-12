function validateForm() {
    var nom = document.forms["inscriptionForm"]["nom"].value;
    var prenom = document.forms["inscriptionForm"]["prenom"].value;
    var email = document.forms["inscriptionForm"]["email"].value;
    var telephone = document.forms["inscriptionForm"]["telephone"].value;
    var dateNaissance = document.forms["inscriptionForm"]["dateNaissance"].value;
    var motDePasse = document.forms["inscriptionForm"]["motDePasse"].value;

    var lettersOnlyRegex = /^[A-Za-z]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telephoneRegex = /^\d{8}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    var isValid = true;

    if (nom == "" || !nom.match(lettersOnlyRegex) || nom.length < 2) {
        document.getElementById("nomError").textContent = "Veuillez entrer un nom valide (lettres uniquement)";
        isValid = false;
    } else {
        document.getElementById("nomError").textContent = "";
    }

    if (prenom == "" || !prenom.match(lettersOnlyRegex) || prenom.length < 2) {
        document.getElementById("prenomError").textContent = "Veuillez entrer un prénom valide (lettres uniquement)";
        isValid = false;
    } else {
        document.getElementById("prenomError").textContent = "";
    }

    if (email == "" || !email.match(emailRegex)) {
        document.getElementById("emailError").textContent = "Veuillez entrer une adresse email valide";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (telephone == "" || !telephone.match(telephoneRegex)) {
        document.getElementById("telephoneError").textContent = "Veuillez entrer un numéro de téléphone valide (8 chiffres)";
        isValid = false;
    } else {
        document.getElementById("telephoneError").textContent = "";
    }

    if (dateNaissance == "") {
        document.getElementById("dateNaissanceError").textContent = "Veuillez entrer une date de naissance";
        isValid = false;
    } else {
        document.getElementById("dateNaissanceError").textContent = "";
    }

    if (motDePasse == "" || !motDePasse.match(passwordRegex)) {
        document.getElementById("motDePasseError").textContent = "Veuillez entrer un mot de passe valide (8 caractères minimum, incluant au moins un chiffre, une lettre minuscule et une lettre majuscule)";
        isValid = false;
    } else {
        document.getElementById("motDePasseError").textContent = "";
    }

    return isValid;
}