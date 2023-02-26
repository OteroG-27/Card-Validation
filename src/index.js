import validator from './validator.js';

let acceder = document.getElementById('btnAccerder');

acceder.addEventListener('click',  () => {
  // event.preventDefault();
  let nameUser = document.getElementById('nameUser').value;
  localStorage.setItem('Nombre', nameUser);
});





// console.log(validator.isValid("5555555555554444"));

