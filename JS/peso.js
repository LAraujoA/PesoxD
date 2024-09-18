function Autorizar(event) {
    // Evita que el formulario recargue la página
    event.preventDefault();

    const peso = document.getElementById('num').value;
    const respuesta = document.getElementById('respuesta');
    const imagen = document.getElementById('imgResultado');
    const audio = document.getElementById('cancion');

    if (peso < 30) {
        respuesta.textContent = "Come mas alv";
        imagen.src = "IMG/calaka.gif"; // Cambia por la ruta de tu imagen
        audio.src = "MP3/calaca.mp3"; // Cambia por la ruta de tu audio
    } else if (peso >= 30 && peso < 72.5) {
        respuesta.textContent = "Sigue así (Saludable)";
        imagen.src = "IMG/ariel.jpg"; // Cambia por la ruta de tu imagen
        audio.src = "MP3/wasaaaaaa.mp3"; // Cambia por la ruta de tu audio
    } else if (peso >= 80) {
        respuesta.textContent = "Prohibido 7 de elixir";
        imagen.src = "IMG/gordas.jpg"; // Cambia por la ruta de tu imagen
        audio.src = "MP3/gelda.mp3"; // Cambia por la ruta de tu audio
    }

    // Mostrar imagen y reproducir audio
    imagen.style.display = "block";
    audio.play();

    return false; // Para prevenir comportamiento predeterminado adicional
}
