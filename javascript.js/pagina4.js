document.addEventListener('DOMContentLoaded', () => {
    const goToindex = document.getElementById('goToindex');
    const goToPagina2 = document.getElementById('goToPagina2');
    const goToPagina3 = document.getElementById('goToPagina3');
    const contactForm = document.getElementById('contactForm');
    const limpiarFormContact = document.getElementById('limpiarFormContact');

        // Redirigir a página 1
        goToindex.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    
        // Redirigir a página 2
        goToPagina2.addEventListener('click', () => {
            window.location.href = 'pagina2.html';
        });
        // Redirigir a página 3
        goToPagina3.addEventListener('click', () => {
            window.location.href = 'pagina3.html';
        });
        

    // Enviar el formulario
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            firstName: formData.get('nombreContacto'),
            lastName: formData.get('apellidoContacto'),
            phone: formData.get('celularContacto'),
            email: formData.get('emailContacto'),
            message: formData.get('mensaje')
        };

        // Enviar el formulario con los datos a EmailJS
        emailjs.send('service_uavqvsl', 'template_pfru2db', data, '4tllvZWBguBzFRXPY')
            .then(() => {
                alert('Mensaje enviado correctamente');
                contactForm.reset();
            })
            .catch(() => {
                alert('Hubo un error al enviar el mensaje');
            });
    });

    // Limpiar formulario
    limpiarFormContact.addEventListener('click', () => {
        contactForm.reset();
    });
});