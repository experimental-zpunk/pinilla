
const audio = new Audio();
audio.src = "//raw.githubusercontent.com/punkdroide/pinilla/master/audio.mp3";



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeBackgroundBtn').addEventListener('click', function() {
        // Cambia el fondo al GIF
        document.body.style.backgroundImage = "url('pinilla.gif')";
        document.body.style.backgroundSize = "100px"; // Ajusta el tamaño del GIF para cubrir toda la pantalla
        document.body.style.backgroundRepeat = "repeat"; // Evita la repetición del GIF
        document.body.style.backgroundPosition = "center"; // Centra el GIF
        
        // Vuelve al fondo original después de 3 segundos
        setTimeout(function() {
            document.body.style.backgroundImage = "none";
        }, 3000); // 3000 ms = 3 segundos
    });
});
