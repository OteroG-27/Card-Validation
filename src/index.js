import validator from './validator.js';
import {startTime, checkTime} from './date.js';
window.addEventListener('DOMContentLoaded', startTime, checkTime);

validator.isValid('1234567891011121')

let validate = document.getElementById('validate');
validate.addEventListener('click', (event) => {
  event.preventDefault();
  let numberTargetCredit = document.getElementById('numberTarget').value;
  validator.isValid(numberTargetCredit);
  document.getElementById('numberTargetSee').innerHTML = numberTargetCredit;
});

