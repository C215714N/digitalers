# Prototype

__Versión preliminar__ y funcional de un sistema o producto para _obtener retroalimentación rapida_ de los usuarios, refinar requisitos y mejorar el diseño _antes de la produccion final_. Es un mecanismo mediante el cual los objetos heredan características entre sí. Este método, también conocido como __desarrollo evolutivo__, es util para aclarar requisitos poco claros o cambiantes, reducir riesgos y aumentar la participación del cliente al permitirles interactuar con una versión tangible del producto final.

* __Herencia__: Los objetos tienen una referencia a su prototipo, a través de la cadena de prototipos. 
* __Flexibilidad__: Permite modificar objetos existentes y la cadena de prototipos en tiempo de ejecución.
* __Uso__: Era el mecanismo principal de herencia antes de la introducción de las clases.

## Implementacion

Cada objeto tiene un _enlace interno_ a otro objeto llamado __prototype__. Ese objeto tiene un prototipo propio, y así sucesivamente hasta llegar a un objeto con __null__ como prototipo. Por definición, _null no tiene prototipo_ y actúa como el __eslabon final__ en la cadena de prototipos.

```js
// Creacion del Prototipo
function User (name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}
// Definicion de Metodos
User.prototype.getUserData = function(){
    return "usuario: " this.name + "\ncorreo:" + this.email;
}
User.prototype.changePasswd = function(oldPasswd, newPasswd){
    if (this.password !== oldPasswd) return false;
    return this.password = newPasswd;
}
```

[volver](../readme.md)