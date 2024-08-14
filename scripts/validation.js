const forms = document.querySelectorAll("form"); // NodeList (Array)
const frms = document.getElementsByTagName("form"); // HTMLCollection(Object)
const signInForm = document.getElementById("signin");
const contactForm = document.getElementById("contact");

/**
 * \w caracteres    | \W no caracteres
 * \d digitos       | \D no digitos
 * \s espacios      | \S no espacios
 * 
 *  + uno o mas coincidencias
 *  * ninguna, una o mas coincidencias
 *  . un caracter cualquiera
 *  {n} cantidad especifica
 *  {n,} n o mas coincidencias
 *  {n,m} entre n y m
 * 
 *  ^ empieza con
 *  $ termina con
 *  \b al principio o al final de un texto
*/

forms.forEach(frm => { frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const validator = [];
    const data = new FormData(); // Objeto de Envio
    // Funciones de utilidad
    const getField = (f) => form[f]
    const p = (n) => getField("password")[n].value
    // Verificamos que NO exista campo contraseña
    if (form.id === "contact"){
        validator.push({ field:"name", message:"el nombre no es valido", type: "text"})
        validator.push({ field:"email", message:"el correo es incorrecto", type: "email"})
        validator.push({ field:"phone", message:"el telefono esta mal", type: "tel"})
        validator.push({ field:"consult", message:"su consulta no pasa la prueba", type: "text"})
    }
    if (form.id === "signin") {
        validator.push({field: "username", message: "el nombre de usuario no es valido"})
        if(p(0) !== p(1)) return alert("las contraseñas difieren")
        validator.push({field: "password", message: "la contraseña es invalida", type:"password"})
    }
    validator.forEach((v) => {
        // Validacion HTML
        if(!(getField(v.field).checkValidity()))
            return alert(v.message)
        // Validacion con Expresiones Regulares
        if(!check(getField(v.field).value, v.type))
            return alert(v.message)
        // Agregar valores al objeto de envio
        data.append(v.field, typeof getField(v.field) === 'object' ? 
        getField(v.field)[0].value : getField(v.field).value)
    })
})})
function check(value, type){
    let regExp = /\w*\d*\s*/
    if (type === "email") // usuario@correo.com
        regExp = /^\S+@\S+(\.\w{2,3}){1,2}$/
    if (type === "tel") // (5411)030-345-6789
        regExp = /^\(\d{2,5}\)(\d{2,4}-){1,3}\d{4}$/
    if (type === "password") // Abcde1234!
        regExp = /((?=[A-Z])(?=[a-z])(?=\d)(?=\$#!_-])){8,}/
    if (type === "date" || type == "hour")
        regExp = /(\d{2}[\/\-\:]{1}){2}\d{4}/
    if (type === "card")
        regExp = /^((?=[\s\-])\d{4}){4}$/
    return regExp.test(value)
}