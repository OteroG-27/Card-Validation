let startTime = () => {
  let today = new Date();
  let months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let curYear = today.getFullYear();
  let date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
  document.getElementById("date").innerHTML = date;

  setTimeout(() => {
    startTime();
  }, 500);

}
const checkTime = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
let nombre = localStorage.getItem('Nombre');
document.getElementById('nameUserSee').innerHTML = nombre;
export {startTime, checkTime} ;
