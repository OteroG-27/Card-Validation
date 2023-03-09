import validator from './validator.js';
import {startTime, checkTime} from './date.js';
window.addEventListener('DOMContentLoaded', startTime, checkTime);
let validate = document.getElementById('validate');
validate.addEventListener('click', (event) => {
  event.preventDefault();
  let numberTargetCredit = document.getElementById('numberTarget').value;
  let isValid = validator.isValid(numberTargetCredit);
  let numeroConNumeral = validator.maskify(numberTargetCredit);
  if(isValid === true && numberTargetCredit === '') {
    alert("Para validar ingrese mas 1 caracteres");
    document.getElementById('numberTarget').classList.add('numberInvalid');
    document.getElementById('numberTarget').classList.remove('numberValid');
  }else if(isValid) {
    alert("Numero valido");
    document.getElementById('numberTargetSee').innerHTML = numeroConNumeral;
    document.getElementById('numberTarget').classList.add('numberValid');
    document.getElementById('numberTarget').classList.remove('numberInvalid');
  }else{
    alert('Numero Invalido');
    document.getElementById('numberTargetSee').innerHTML = numeroConNumeral;
    document.getElementById('numberTarget').classList.add('numberInvalid');
    document.getElementById('numberTarget').classList.remove('numberValid');
  }

});

