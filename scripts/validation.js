const forms = document.querySelectorAll("form"); // NodeList (Array)
const frms = document.getElementsByTagName("form"); // HTMLCollection(Object)
const signInForm = document.getElementById("signin");
const contactForm = document.getElementById("contact");

forms.forEach(frm => { frm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Acceder a los campos de formularios
    const getField = (f) => event.target[f]
    // Acceder a los valores de contraseña
    const p = (n) => getField("password")[n].value
    // Verificamos que NO exista campo contraseña
    if (event.target.id === "contact"){
        console.log("formulario de contacto");
    }
    if (event.target.id === "signin") {
        console.log("formulario de registro")
        if(p(0) === p(1)) { console.log("las contraseñas difieren")}
    }
})})