// Validación de formularios de autenticación
document.querySelectorAll('.auth-form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        console.log('Formulario válido:', new FormData(form));
    });
});

// Acordeón dinámico para Preguntas Frecuentes
document.querySelectorAll('.faq-item').forEach(item => {
    const pregunta = item.querySelector('.faq-question');
    
    if (pregunta) {
        pregunta.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    }
});