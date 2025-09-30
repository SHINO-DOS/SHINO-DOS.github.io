var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

btnno.addEventListener('mouseenter', () => {
  var pos = coordenadas();
  btnno.style.top = `${pos.posy}px`;
  btnno.style.left = `${pos.posx}px`;
});

function coordenadas() {
  // límites dentro del contenedor
  var ancho = window.innerWidth - 100;
  var alto = window.innerHeight - 150;
  var posx = Math.random() * ancho;
  var posy = Math.random() * alto;
  return { posx, posy };
}

btnyes.addEventListener('click', () => {
  alert('¡Ya sabía que dirías que sí! 😍💖');
});

