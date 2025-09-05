# Creacionales

Es un tipo de __patrón de diseño__ que proporciona mecanismos para crear objetos de forma _flexible y reutilizable_, separando el proceso de creación de un objeto de su implementación final. Su objetivo es que un sistema sea independiente de cómo se crean, componen y representan sus objetos, lo que lleva a un código más escalable, mantenible y robusto.
 
* __Flexibilidad y Reutilización__: Permiten crear objetos de manera que la flexibilidad y la reutilización del código existente se incrementen. 
* __Desacoplamiento__: Separar la lógica de creación de objetos de su uso final para que el sistema no dependa de la forma específica en que se instancian. 
* __Escalabilidad y Mantenimiento__: Facilitan la adición de nuevos tipos de objetos sin afectar significativamente el resto del código. 

## Constructor

Permite crear objetos a partir de una función o clase con la posibilidad de inicializar propiedades específicas. Facilita la creación de múltiples instancias con propiedades similares y es util para crear objetos personalizados.

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person('Alice', 30);
```
```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person('Bob', 25);
```

## Factory

Permite crear objetos sin necesidad de especificar la clase exacta que se va a instanciar. Centraliza la lógica de creación y ofrece flexibilidad en el tipo de objeto que se crea.

```js
function AnimalFactory(type) {
switch(type){
    case "dog": return { sound: 'woof' };
    case "cat": return { sound: 'meow' };
}}
const dog = AnimalFactory('dog');
```
```js
class Cat {
    sound() { return 'meow'; }
}
class Dog {
    sound() { return 'woof'; }
}
class AnimalFactory {
    createAnimal(type) {
    switch(type){
        case "dog": return new Dog();
        case "cat": return new Cat();
    } }
}
const factory = new AnimalFactory();
const dog = factory.createAnimal('dog');
```

## Singleton

Asegura que una clase tenga solo una instancia y proporciona un punto de acceso global a ella. Evita la creación de múltiples instancias y es ideal para manejar configuraciones compartidas.

```js
const Singleton = (function() {
    let instance;
    function createInstance() {
        return { data: 'singleton instance' };
    }
    return {
    getInstance: function() {
        if (!instance) instance = createInstance();
        return instance;
    } }
})()
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
```
```js
class Singleton {
constructor() {
    if (!Singleton.instance) Singleton.instance = this;
    return Singleton.instance;
} }
const instance1 = new Singleton();
const instance2 = new Singleton();
```

[volver](../readme.md)