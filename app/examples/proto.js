function Person(nombre, edad, genero){
// Propiedades
    this.nombre = nombre,
    this.edad = edad,
    this.genero = genero
}
// Metodos
Person.prototype.saludar = function() {
    return "buenos dias, mi nombre es " + this.nombre
}
Person.prototype.decirEdad = function(){
    return this.genero === "F" ? "no preguntes" : "tengo "+this.edad+" años"
}
// Implementacion
const users = [
    new Person("cristian", 34, "M"),
    new Person("laura", 43, "F"),
]