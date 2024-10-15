/** TIPADO ESTATICO
 * string           "Cristian"
 * number           33 | 3.14 | 0x21 | 0b00100001 | 0o41 |
 * boolean          true | false
 * array<type>      ["HTML", "CSS", "JS"]
 * void             para funciones sin return
 */
// Asignacion (Definimos que tipo de datos debe almacenar)
let username:string;
// Inferencia (Se deduce el tipo de dato a partir de su valor)
let age = 33;

/** TUPLAS: Lista de valores posibles para una variable o funcion */
function checkAge(age:number):boolean|string{
    age = Number(age)
    if (isNaN(age)) return "debe ingresar un numero"
    if (age > 18) return true
    return false
}
checkAge(age);

/** TIPOS: Valores personalizados de datos */
type day = "l"|"m"|"x"|"j"|"v"|"s"|"d";
type month = "ene"|"feb"|"mar"|"abr"|"may"|"jun"|"jul"|"ago"|"sep"|"oct"|"nov"|"dic";
type gender = "M"|"F"|"X";
type doctype = "DNI"|"DNIE"|"LC"|"LE"|"CI"|"PASS"
type email = `${string}@${string}.${string}`
type cuit = `${number}-${number}-${number}`
type dni = `${gender}${number}`

/** INTERFACES: Objetos con claves y tipos definidos */
// Interfaz para Usuario
interface User{
    username:string
    email:email
    password:string
}
// Extension de Usuario
interface UserData extends User{
    first_name:string
    last_name:string
    birth_date:Date
    month:month
    gender:gender
    id_type:doctype
    id_number:dni|cuit|number
    charge:string
}
// Implementacion de Interfaz
const user:UserData = {
    username: "c215714n",
    email: "cristian@hotmail.com",
    password: "R00t",
    first_name: "Cristian",
    last_name: "Racedo",
    charge: "Instructor",
    gender: "M",
    birth_date: new Date("1991-04-18;07:50:36"),
    month: "abr",
    id_type: "DNI",
    id_number: 35336446,
}