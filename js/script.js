 // Aquí tu código
 const agregar = document.getElementById('agregar');
 const lista = document.getElementById('lista');
 
 agregar.addEventListener('click', function() {
   const elmentoNuevo = prompt('Elemento que quieres agregar a la lista: ');
   lista.innerHTML += '<li>' + elmentoNuevo + '</li>';  
 });