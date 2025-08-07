let counter = 0;

const check = ({element:el, condition, list: [a,b]}) => 
    condition ? el.classList.replace(b,a) : el.classList.replace(a,b)
const checkPass = () => sign_pass1.value === sign_pass2.value
// Evitamos el comportamiento por defecto (RECARGAR LA PAGINA)
signup.addEventListener('submit', (event) => {
    event.preventDefault()
})
// Verificamos los datos
signup.addEventListener('input', (event) => {
    const element = event.target;
    const list = ['b-success-lite', 'b-danger-lite'];
    // Agregamos la clase para invalidar 
    element.classList.add('b-danger-lite')
    // Verificamos si  se cumplen los requisitos
    check({ element, list, condition: element.checkValidity() })
    // Corroboramos las contraseñas
    element.type === "password" && [sign_pass1, sign_pass2].map(element => 
        check({element, list, condition: element.checkValidity() && checkPass()}));
})
// Notificacion personalizada
sign_pass2.addEventListener('input', ({target:el}) => {
    checkPass() ? el.setCustomValidity("") : el.setCustomValidity("Las contraseñas no coinciden");
})