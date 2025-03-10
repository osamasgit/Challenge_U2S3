 // Aquí tu código
 const agregar = document.getElementById('agregar');
 const lista = document.getElementById('lista');
 
 agregar.addEventListener('click', function() {
   const elmentoNuevo = prompt('Añadir a la lista de la compra: ');
   lista.innerHTML += '<li>' + elmentoNuevo + '</li>';  
 });