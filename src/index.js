import validator from './validator.js';
import {startTime, checkTime} from './date.js';
window.addEventListener('DOMContentLoaded', startTime, checkTime);
// validator.isValid('4539148803436467');


let validate = document.getElementById('validate');
validate.addEventListener('click', (event) => {
  event.preventDefault();
  let numberTargetCredit = document.getElementById('numberTarget').value;
  let isValid = validator.isValid(numberTargetCredit);
  let numeroConNumeral = validator.maskify(numberTargetCredit).join('');
  if(isValid){
    document.getElementById('numberTargetSee').innerHTML = numeroConNumeral;
    document.getElementById('numberTarget').classList.remove('numberInvalid');
    document.getElementById('numberTarget').classList.add('numberValid');
    alert('Numero valido')
  }else{
    document.getElementById('numberTargetSee').innerHTML = numeroConNumeral;
    document.getElementById('numberTarget').classList.add('numberInvalid');
    document.getElementById('numberTarget').classList.remove('numberValid');
    alert('Introduzca un numero valido')

  }
});

