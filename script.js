var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

btnno.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
})

var coordenadas = () => {
    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnyes.addEventListener('click', () => {
    alert('Sé que a veces la vida puede ser difícil y los estudios pueden ser estresantes, pero no te rindas. Tienes mucho potencial y talento, y estoy seguro de que puedes lograr tus metas si te esfuerzas y perseveras. Quiero animarte con algunas palabras que me motivan a mí:

- "No importa lo lento que vayas, siempre y cuando no te detengas". - Confucio
- "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar". - Winston Churchill
- "Nunca dejes de aprender, porque la vida nunca deja de enseñar". - Desconocido
- "La felicidad no es algo hecho. Proviene de tus propias acciones". - Dalai Lama
- "Si puedes soñarlo, puedes hacerlo". - Walt Disney

Espero que estas frases te inspiren y te den fuerza para seguir adelante y estudiando. Recuerda que siempre puedes contar conmigo para ayudarte con cualquier duda o consulta que tengas.😊');
});
