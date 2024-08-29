// Prototipo: Objeto de referencia a partir del cual se crean otros
function Persona (firstname, lastname, idtype, idnumber, birthDate, age,) {
    this.firstname = firstname
    this.lastname = lastname
    this.idtype = idtype
    this.idnumber = idnumber
    this.birthDate = birthDate
    this.age = age
}
// Asociacion de Metodos
Persona.prototype.sayHi = function (){
    return `Hola, me llamo ${this.firstname} ${this.lastname}. Encantado de conocerte`;
}
Persona.prototype.getAge = function (){
    return `Tengo ${this.age} años y soy ${this.age>=18? "mayor":"menor"} de edad`;
}
Persona.prototype.changeName = function (firstname, lastname) {
    if(/^\D{4,50}$/.test(firstname) && /^\D{4,50}$/.test(lastname)){        
        this.firstname = firstname;
        this.lastname = lastname;
        return `Su nombre fue actualizado exitosamente a ${firstname}, ${lastname}`
    }
    else return "No se pudo actualizar el nombre"
}

// Clase: Molde base que se utiliza para crear instancias (objetos)
class Person {
// Propiedades Privadas (Atributos asociados a la instancia de la clase)
    #firstname
    #lastname
    #idtype
    #idnumber
    #birthDate
    #age
    // Metodo constructor (Invocado inmediatamente cuando se llama a la clase)
    constructor(firstname, lastname, idtype, idnumber, birthDate, age){
        this.#firstname = firstname
        this.#lastname = lastname
        this.#idtype = idtype
        this.#idnumber = idnumber
        this.#birthDate = birthDate
        this.#age = age
    }
    // Metodos Publicos (Funciones asociadas a la clase)
    sayHi(){
        return `Hola, me llamo ${this.firstname} ${this.lastname}. Encantado de conocerte`;
    }
    getAge(){
        return `Tengo ${this.age} años y soy ${this.age>=18? "mayor":"menor"} de edad`;
    }
    changeName(firstname, lastname){
        if(/^\D{4,50}$/.test(firstname) && /^\D{4,50}$/.test(lastname)){        
            this.firstname = firstname;
            this.lastname = lastname;
            return `Su nombre fue actualizado exitosamente a ${firstname}, ${lastname}`
        }
        else return "No se pudo actualizar el nombre"
    }
}
// Objetos: Instancia de una clase o creado a partir de un prototipo
const alumnoA = new Person("cristian","castro");
const alumnoB = new Person("ricky","martin")
const alumnoC = new Person("luis","miguel")
// Verificacion de funcionalidades
console.log(alumnoA, alumnoB, alumnoC)
console.log(alumnoA.sayHi());
console.log(alumnoA.changeName("cri","sol"));
console.log(alumnoA.changeName("c215714n", "Racedo"));
console.log(alumnoA.changeName("Cristian Damian", "Racedo"))