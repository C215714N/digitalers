# Estructurales

## Adapter

Permite que dos interfaces incompatibles trabajen juntas. Proporciona una capa de adaptación entre dos objetos y se utiliza cuando necesitas adaptar clases existentes a una nueva interfaz.

```js
function OldInterface() {
    this.request = function() {
        return 'Old Interface Request';
    };
}
function NewInterface() {
    this.specificRequest = function() {
        return 'New Interface Request';
    };
}
function Adapter(oldInterface) {
return {
    request: function() {
    return oldInterface.specificRequest();
} } }
const oldInterface = new NewInterface();
const adapter = Adapter(oldInterface);
```
```js
class OldInterface {
    request() {
        return 'Old Interface Request';
    }
}
class NewInterface {
    specificRequest() {
        return 'New Interface Request';
    }
}
class Adapter {
    constructor(newInterface) {
        this.newInterface = newInterface;
    }
    request() {
        return this.newInterface.specificRequest();
    }
}
const newInterface = new NewInterface();
const adapter = new Adapter(newInterface);
```

## Decorator:__
El patrón **Decorator** permite añadir comportamiento a un objeto de manera dinámica. No modifica la estructura del objeto original y Útil para añadir características sin alterar el código existente.
```js
function Coffee() {
    this.cost = function() {
        return 5;
    };
}
function Milk(coffee) {
    const cost = coffee.cost();
    coffee.cost = function() { return cost + 2 }
    return coffee
}
let coffee = new Coffee();
coffee = Milk(coffee);
console.log(coffee.cost());  // 7
```
```js
class Coffee {
    cost() {
        return 5;
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    cost() {
        return this.coffee.cost() + 2;
    }
}
let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
console.log(coffee.cost());  // 7
```

## Facade

Proporciona una interfaz simplificada para interactuar con sistemas más complejos. Reduce la complejidad de la interacción con subsistemas y Es ideal para encapsular librerías o servicios externos.

```js
function SubsystemA() {
    this.operationA = function() {
        return 'Subsystem A: Operation A';
    };
}
function SubsystemB() {
    this.operationB = function() {
        return 'Subsystem B: Operation B';
    };
}
function Facade() {
    const subsystemA = new SubsystemA();
    const subsystemB = new SubsystemB();
    return {
    operation: function() {
        return `${subsystemA.operationA()} and ${subsystemB.operationB()}`;
} } }
const facade = Facade();
console.log(facade.operation())
```
```js
class SubsystemA {
    operationA() {
        return 'Subsystem A: Operation A';
    }
}
class SubsystemB {
    operationB() {
        return 'Subsystem B: Operation B';
    }
}
class Facade {
    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
    }
    operation() {
        return `${this.subsystemA.operationA()} and ${this.subsystemB.operationB()}`;
    }
}
const facade = new Facade();
console.log(facade.operation());  // Subsystem A: Operation A and Subsystem B: Operation B
```

[volver](../readme.md)