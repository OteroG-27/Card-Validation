import validator from './validator.js';
import {startTime, checkTime} from './date.js';
window.addEventListener('DOMContentLoaded', startTime, checkTime);
// validator.isValid('79927398713');
let validate = document.getElementById('validate');
validate.addEventListener('click', (event) => {
  event.preventDefault();
  let numberTargetCredit = document.getElementById('numberTarget').value;
  let isValid = validator.isValid(numberTargetCredit);
  let numeroConNumeral = validator.maskify(numberTargetCredit);
  if(isValid){
    alert("Numero valido");
    document.getElementById('numberTarget').classList.add('numberValid');
    document.getElementById('numberTarget').classList.remove('numberInvalid');
    document.getElementById('numberTargetSee').innerHTML = numeroConNumeral;
  }else{
    alert('Introduzca un numero de tarjeta valido');
    document.getElementById('numberTargetSee').innerHTML = numeroConNumeral;
    document.getElementById('numberTarget').classList.add('numberInvalid');
    document.getElementById('numberTarget').classList.remove('numberValid');
  }
});

