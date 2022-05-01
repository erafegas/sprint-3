// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var name = document.querySelector(".name");


// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

// Exercise 6
function validate() {

  let nom = document.forms["myForm"]["fName"].value;
  let fNom = document.forms["myForm"]["fName"];
  let cognom = document.forms["myForm"]["fLastN"].value;
  let fCognom = document.forms["myForm"]["fLastN"];
  let email = document.forms["myForm"]["fEmail"].value;
  let fEmail = document.forms["myForm"]["fEmail"];
  let address = document.forms["myForm"]["fAddress"].value;
  let fAddress = document.forms["myForm"]["fAddress"];
  let password = document.forms["myForm"]["fPassword"].value;
  let fPassword = document.forms["myForm"]["fPassword"];
  let phone = document.forms["myForm"]["fPhone"].value;
  let fPhone = document.forms["myForm"]["fPhone"];

  let reg_name_lastname = /^[a-zA-Z\s]*$/;
  let reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let reg_passw=  /^(?=.*\d)[0-9a-zA-Z]\w{2,8}$/;

  if (nom == "" || nom.length < 3 || !(reg_name_lastname.test(nom))) {
    fNom.classList.add('is-invalid');
  }
  else {
    fNom.classList.remove('is-invalid');
    fNom.classList.add('is-valid');
  }

  if (cognom == "" || cognom.length < 3 || !(reg_name_lastname.test(cognom))) {
    fCognom.classList.add('is-invalid');
  }
  else {
    fCognom.classList.remove('is-invalid');
    fCognom.classList.add('is-valid');
  }

  if (email == "" || email.length < 3 || !(reg_email.test(email))) {
    fEmail.classList.add('is-invalid'); 
  }
  else {
    fEmail.classList.remove('is-invalid');
    fEmail.classList.add('is-valid');
  }

  if (address == "" || address.length < 3) {
    fAddress.classList.add('is-invalid');
  }
  else {
    fAddress.classList.remove('is-invalid');
    fAddress.classList.add('is-valid');
  }

  if (password == "" || !(reg_passw.test(password))) {
    fPassword.classList.add('is-invalid');
  }
  else {
    fPassword.classList.remove('is-invalid');
    fPassword.classList.add('is-valid');
  }

  if (phone == "" || phone.length < 9) {
    fPhone.classList.add('is-invalid');
  }
  else {
    fPhone.classList.remove('is-invalid');
    fPhone.classList.add('is-valid');
  }

  if ((fNom.classList.contains ("is-valid")) && fCognom.classList.contains ("is-valid") && fEmail.classList.contains ("is-valid") && fAddress.classList.contains ("is-valid") && fPhone.classList.contains ("is-valid") && fPassword.classList.contains ("is-valid")) {
    // al no fer la validació amb cap servidor, tornem a enviar a la mateixa pàgina, reiniciant les propietats.
    fNom.classList.remove('is-valid');
    fCognom.classList.remove('is-valid');
    fEmail.classList.remove('is-valid');
    fAddress.classList.remove('is-valid');
    fPassword.classList.remove('is-valid');
    fPhone.classList.remove('is-valid');

    myForm.classList.add('was-validated');
    location.href="checkout.html";
  }

}
