import validator from './validator.js';
import {startTime, checkTime} from './date.js';
window.addEventListener('DOMContentLoaded', startTime, checkTime);

let validate = document.getElementById('validate');
validate.addEventListener('click', (event) => {
  event.preventDefault();
  let numberTargetCredid = document.getElementById('numberTarget').value;
  validator.isValid(numberTargetCredid);

  document.getElementById('numberTargetSee').innerHTML = numberTargetCredid;

});



