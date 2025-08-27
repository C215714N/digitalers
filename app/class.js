class Persona {
// Propiedades
    constructor(nombre, edad, genero){    
        this.nombre = nombre,
        this.edad = edad,
        this.genero = genero
    }
// Metodos
    saludar () {
        return "buenos dias, mi nombre es " + this.nombre
    }
    decirEdad (){
        return this.genero === "F" ? "no preguntes" : "tengo " + this.edad + " años"
    }
}
// Implementacion
const users = [
    new Person("cristian", 34, "M"),
    new Person("laura", 43, "F")
]