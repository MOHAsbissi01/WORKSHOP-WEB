  var formElement = document.getElementById("Form");
  var nomElement = document.getElementById("nom");
  var prenomElement = document.getElementById("prenom");
  var emailElement = document.getElementById("email");
  var telElement = document.getElementById("tel");
  var dateElement = document.getElementById("date");
  var passwordElement = document.getElementById("password");

  formElement.addEventListener("submit", function(event){
    event.preventDefault();
    ValidateForm();
  })

  function ValidateForm(){
      var nomValue = nomElement.value;
      var prenomValue = prenomElement.value;
      var emailValue = emailElement.value;
      var telValue = telElement.value;
      var dateValue = dateElement.value; 
      var passwordValue = passwordElement.value;
      
      var nomError = document.getElementById("nomError");
      var prenomError = document.getElementById("prenomError");
      var emailError = document.getElementById("emailError");
      var telError = document.getElementById("telError");
      var dateError = document.getElementById("dateError");
      var passwordError = document.getElementById("passwordError");

      var nomCorrect = document.getElementById("nomCorrect");
      var prenomCorrect = document.getElementById("prenomCorrect");
      var emailCorrect = document.getElementById("emailCorrect");
      var telCorrect = document.getElementById("telCorrect");
      var dateCorrect = document.getElementById("dateCorrect");
      var passwordCorrect = document.getElementById("passwordCorrect");

      var patternNom = /^[a-z A-Z]+$/;
      var patternPrenom = /.+/;
      var patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var patternTel = /^\d{8}$/;
      var patternPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if(!nomValue.match(patternNom)){
        nomError.innerHTML = "Nom incorrect";
      }else{
        nomCorrect.innerHTML = "Nom correct";
      }

      if(!prenomValue.match(patternPrenom)){
        prenomError.innerHTML = "Prenom incorrect";
      }else{
        prenomCorrect.innerHTML = "Prenom correct";
      }

      if(!emailValue.match(patternEmail)){
        emailError.innerHTML = "Email incorrect";
      }else{
        emailError.innerHTML = "Email correct";
      }

      if(!telValue.match(patternTel)){
        emailError.innerHTML = "Numero Tel incorrect";
      }else{
        emailCorrect.innerHTML = "Numero Tel correct";
      }

      var currentDate = new Date();
      var inputDate = new Date(dateValue);

      if (isNaN(inputDate) || inputDate >= currentDate) {
        dateError.innerHTML = "Date incorrect";
      }else{
        dateCorrect.innerHTML = "Date correct";
      }

      if(!passwordValue.match(patternPassword)){
        passwordError.innerHTML = "Password incorrect";
      }else{
        passwordCorrect.innerHTML = "Password correct";
      }
      
  }