# Comportamiento

Son plantillas reutilizables que abordan problemas recurrentes de comunicación y responsabilidades entre objetos, ayudando a crear un código más limpio, mantenible y escalable. Algunos ejemplos comunes incluyen Observador, que facilita la comunicación entre objetos cuando cambian de estado; Estrategia, que permite elegir un algoritmo en tiempo de ejecución; y Mediador, que centraliza la comunicación entre objetos para evitar acoplamientos directos. 

## Observer

Define una relación de uno a muchos, de modo que cuando un objeto cambia de estado, sus dependientes son notificados. Permite que múltiples objetos reciban actualizaciones y Es útil para crear sistemas de eventos.

```js
function Subject() {
    this.observers = [];

    this.subscribe = function(observer) {
        this.observers.push(observer);
    };

    this.notify = function(data) {
        this.observers.forEach(observer => observer.update(data));
    };
}
function Observer(name) {
    this.update = function(data) {
        console.log(`${name} received data: ${data}`);
    };
}
const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify('Notification');
```
```js
class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}
class Observer {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name} received data: ${data}`);
    }
}
const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');
subject.subscribe(observer1);


subject.subscribe(observer2);

subject.notify('Notification');
```

## Strategy:

Permite definir una familia de algoritmos y hacerlos intercambiables. Separa la lógica de un algoritmo de su uso y Facilita el cambio de comportamiento de manera flexible.

```js
function StrategyA() {
    this.execute = function() {
        return 'Strategy A';
    };
}

function StrategyB() {
    this.execute = function() {
        return 'Strategy B';
    };
}

function Context(strategy) {
    this.strategy = strategy;

    this.executeStrategy = function() {
        return this.strategy.execute();
    };
}

const context = new Context(new StrategyA());
console.log(context.executeStrategy());  // Strategy A
```

```js
class StrategyA {
    execute() {
        return 'Strategy A';
    }
}

class StrategyB {
    execute() {
        return 'Strategy B';
    }
}

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    executeStrategy() {
        return this.strategy.execute();
    }
}

const context = new Context(new StrategyA());
console.log(context.executeStrategy());  // Strategy A
```

## Command

Encapsula una solicitud como un objeto, lo que permite parametrizar clientes con distintas solicitudes, encolar solicitudes o registrar el historial de las operaciones. Encapsula acciones bajo un mismo formato y Útil para realizar operaciones que necesitan poder deshacerse.

```js
function Light() {
    this.on = function() {
        console.log('Light is on');
    };

    this.off = function() {
        console.log('Light is off');
    };
}

function Command(onCommand, offCommand) {
    this.onCommand = onCommand;
    this.offCommand = offCommand;

    this.execute = function(state) {
        if (state === 'on') {
            this.onCommand();
        } else {
            this.offCommand();
        }
    };
}

const light = new Light();
const command = new Command(light.on.bind(light), light.off.bind(light));

command.execute('on');  // Light is on
command.execute('off'); // Light is off
```

```js
class Light {
    on() {
        console.log('Light is on');
    }

    off() {
        console.log('Light is off');
    }
}

class Command {
    constructor(onCommand, offCommand) {
        this.onCommand = onCommand;
        this.offCommand = offCommand;
    }

    execute(state) {
        if (state === 'on') {
            this.onCommand();
        } else {
            this.offCommand();
        }
    }
}

const light = new Light();
const command = new Command(light.on.bind(light), light.off.bind(light));

command.execute('on');  // Light is on
command.execute('off'); // Light is off
```