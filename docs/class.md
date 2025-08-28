# Class

__Abstraccion principal__ implementada en el _paradigma de objetos_ que consiste en un molde que va a ser utilizado para __definir los atributos y funciones__ que tendran los objetos derivados de las mismas. Fueron _introducidas en ES6_ y son básicamente una _sintaxis más limpia y legible_ sobre el mecanismo de herencia prototipal. La principal diferencia es que el prototipo es el objeto que se hereda, y la clase es la definición del __modelo que sera instanciado__.

* __Sintaxis__: similar a otros lenguajes de programacion como Java o Python, resultando familiar para los desarrolladores.
* __Construcción__: Las clases se utilizan la herencia prototipal, ofreciendo una capa de abstracción que simplifica su uso.
* __Encapsulación__: Proporcionan una forma más organizada y limpia de definir la estructura y el comportamiento de un objeto.

## Implementacion

La __declaración class__ utiliza la _herencia basada en prototipos_, también se puede definir usando una __expresion de clase__. Pero a diferencia de las expresiones de clases, no permite que una clase existente sea declarada de nuevo, ya que arrojaria un error de tipo. La propiedad constructor es opcional y el typeof de las clases generadas con esta palabra clave siempre será "function".

```js
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    getUserData(){
        return "usuario: " this.name + "\ncorreo:" + this.email;
    }
    changePasswd (oldPasswd, newPasswd){
        if (this.password !== oldPasswd) return false;
        return this.password = newPasswd;
    }
}
```

[volver](../readme.md)