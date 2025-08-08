/** EXPRESIONES REGULARES 
 *
Caracteres
 * \w: solamente caracteres alfanumericos
 * \d: solamente digitos
 * \s: solamente espacios
 * \W: todo excepto caracteres alfanumericos
 * \D: todo excepto digitos
 * \S: todo excepto espacios
 * [abc]: Algun caracter del grupo
 * [^abc]: ningun caracter del grupo
 *
Cuantificadores
 * . un caracter cualquiera
 * * una, ninguna o mas repeticiones
 * + una o mas repeticiones
 * {n} cantidad fija de repeticiones
 * {n,} cantidad minima de repeticiones
 * {n,m} cantidad minima y maxima de repeticiones 
 * 
Posicionamiento
 * ^ al principio de una cadena
 * $ al final de una cadena
 * \b al comienzo o final de una palabra
 * \B todo menos al comienzo o final de una palabra * 
*/
const regExp = {
    text: /(\w*\s*){4,50}/,
    number: new RegExp('\d+'),
    currency: new RegExp('\d+(\.\d{0,4}){0,1}'),
    password: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[?-_!#]).{8,}/,
    phone: /\(\d{2,5}\)\s*(\d{2,4}[\-\s]{1}){1,3}\d{4}$/,
    hour: /^([0-2]\d{1,2})(:*[0-5]\d){2}$/,
    date: /(\d{1,2}[\/\-]){2}\d{2,4}/,
    email: /^\S+@\S+(\.\w{2,})+$/,
    card: new RegExp('[\-\d]{4}'),
    default: new RegExp('(\w*\s*\d*){4,}'),
}
function validate({type, value}){
    const keys = Object.keys(regExp)
    const k = keys.find(k => type == k) || "default"; 
    return regExp[k].test(value)
}