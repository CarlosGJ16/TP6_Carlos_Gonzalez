document.addEventListener('DOMContentLoaded', () => {
    const goToindex = document.getElementById('goToindex');
    const goToPagina3 = document.getElementById('goToPagina3');
    const goToPagina4 = document.getElementById('goToPagina4');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Mensaje de bienvenida y solicitud del nombre del usuario
    const nombreUsuario = prompt("¡Bienvenido! ¿Cómo te llamas?");

    // Mostrar mensaje en la página
    if (nombreUsuario) {
        welcomeMessage.textContent = "¡Hola, " + nombreUsuario + "! Estamos felices de tenerte aquí.";
    } else {
        welcomeMessage.textContent = "¡Hola! Estamos felices de tenerte aquí.";
    }

    // Guardar el nombre del usuario en el almacenamiento local para usarlo en otras páginas
    localStorage.setItem('nombreUsuario', nombreUsuario);

    // Redirigir a las otras páginas
    goToindex.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    goToPagina3.addEventListener('click', () => {
        window.location.href = 'pagina3.html';
    });

    goToPagina4.addEventListener('click', () => {
        window.location.href = 'pagina4.html';
    });
});


