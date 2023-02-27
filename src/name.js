let acceder = document.getElementById('btnAccerder');
acceder.addEventListener('click',  () => {
  let nameUser = document.getElementById('nameUser').value;
  localStorage.setItem('Nombre', nameUser);
});
