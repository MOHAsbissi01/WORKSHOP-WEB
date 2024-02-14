
document.addEventListener("DOMContentLoaded", function() {
  var formElement = document.getElementById("Form");
  var nomElement = document.getElementById("nom");
  var prenomElement = document.getElementById("prenom");
  var emailElement = document.getElementById("email");
  var telElement = document.getElementById("telephone");
  var dateElement = document.getElementById("dateNaissance");
  var passwordElement = document.getElementById("motDePasse");

  if(formElement) {
      formElement.addEventListener("submit", function(event){
          var isValid = ValidateForm();
          if (!isValid) {
              event.preventDefault();
          }
      });
  }

  function ValidateForm(){
    var nomValue = nomElement.value.trim();
    var prenomValue = prenomElement.value.trim();
    var emailValue = emailElement.value.trim();
    var telValue = telElement.value.trim();
    var dateValue = dateElement.value; 
    var passwordValue = passwordElement.value.trim();
    
    var nomError = document.getElementById("nomError");
    var prenomError = document.getElementById("prenomError");
    var emailError = document.getElementById("emailError");
    var telError = document.getElementById("telError");
    var dateError = document.getElementById("dateError");
    var passwordError = document.getElementById("passwordError");
  
    var patternNom = /^[a-zA-Z]+$/;
    var patternPrenom = /^[a-zA-Z]+$/;
    var patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var patternTel = /^\d{8}$/;
    var patternPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  
    var isValid = true;
  
    if (!nomValue.match(patternNom)) {
      nomError.innerHTML = "Nom incorrect (doit contenir uniquement des lettres)";
      isValid = false;
    } else {
      nomError.innerHTML = "";
    }
  
    if (!prenomValue.match(patternPrenom)) {
      prenomError.innerHTML = "Prénom incorrect (doit contenir uniquement des lettres)";
      isValid = false;
    } else {
      prenomError.innerHTML = "";
    }
  
    if (!emailValue.match(patternEmail)) {
      emailError.innerHTML = "Email incorrect";
      isValid = false;
  } else {
      if (!emailValue.endsWith("@esprit.tn")) {
          emailError.innerHTML = "L'adresse email doit se terminer par '@esprit.tn'";
          isValid = false;
      } else {
          emailError.innerHTML = "";
      }
  }
  
    if (!telValue.match(patternTel)) {
      telError.innerHTML = "Numéro de téléphone incorrect (doit contenir 8 chiffres)";
      isValid = false;
    } else {
      telError.innerHTML = "";
    }
  
    var currentDate = new Date();
    var inputDate = new Date(dateValue);
  
    if (isNaN(inputDate) || inputDate >= currentDate) {
      dateError.innerHTML = "Date de naissance incorrecte (ne peut pas être dans le futur)";
      isValid = false;
    } else {
      dateError.innerHTML = "";
    }
  
    if (!passwordValue.match(patternPassword)) {
      passwordError.innerHTML = "Mot de passe incorrect (doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre)";
      isValid = false;
    } else {
      passwordError.innerHTML = "";
    }
  
    return isValid;
  }
});
