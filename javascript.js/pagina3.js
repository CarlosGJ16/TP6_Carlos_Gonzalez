document.addEventListener('DOMContentLoaded', () => {
    const goToindex = document.getElementById('goToindex');
    const goToPagina2 = document.getElementById('goToPagina2');
    const goToPagina4 = document.getElementById('goToPagina4');
    const personalForm = document.getElementById('personalForm');
    const limpiarForm = document.getElementById('limpiarForm');

    // Redirigir a página 1
    goToindex.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Redirigir a página 3
    goToPagina2.addEventListener('click', () => {
        window.location.href = 'pagina2.html';
    });

        // Redirigir a página 3
        goToPagina4.addEventListener('click', () => {
            window.location.href = 'pagina4.html';
        });

    // Enviar el formulario
    personalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(personalForm);
        const data = {
            firstName: formData.get('nombre'),
            lastName: formData.get('apellido'),
            age: formData.get('edad'),
            address: formData.get('direccion'),
            phone: formData.get('celular'),
            email: formData.get('email'),
            city: formData.get('ciudad'),
            country: formData.get('pais')
        };

        // Enviar el formulario con los datos a EmailJS
        emailjs.send('service_uavqvsl', 'template_0vdsxvu', data, '4tllvZWBguBzFRXPY')
            .then(() => {
                alert('Formulario enviado correctamente');
                personalForm.reset();
            })
            .catch(() => {
                alert('Hubo un error al enviar el formulario');
            });
    });

    // Limpiar formulario
    limpiarForm.addEventListener('click', () => {
        personalForm.reset();
    });
});
