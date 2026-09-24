document.querySelectorAll('.auth-form').forEach(form =>{
    form.addEventListener('submit', e =>{
        e.preventDefault();
        if(!form.checkValidity()){
            form.reportValidity();
            return
        }
        console.log('Formulario valido:', new FormData(form));
    })
})

document.querySelectorAll('.faq-item').forEach(item => {
    const pregunta = item.querySelectorAll('.faq-question');
    pregunta.addEventListener('click', ()=> item.classList.toggle('open'));
});