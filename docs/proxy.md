## Proxy

Elemento que permite interceptar y redefinir operaciones fundamentales en objetos, como acceder a propiedades, establecer valores, entre otros. Se utilizan para añadir control y lógica personalizada al acceso de un objeto.
Los proxies se utilizan para interceptar y redefinir las operaciones básicas de los objetos, como acceder o modificar propiedades, invocar funciones, etc. Son útiles cuando quieres tener control sobre cómo interactúan los objetos con su entorno o cuando necesitas validar, auditar o modificar el comportamiento de un objeto de forma personalizada.

* __Validación__: Puedes validar los valores que se asignan a las propiedades de un objeto antes de que sean almacenados.
* __Depuración__: Los proxies permiten registrar cuándo se accede o modifica una propiedad.
* __Accesos dinámicos__: Puedes generar dinámicamente valores o propiedades que no existen físicamente en el objeto.

```js
const obj = { nombre: 'Juan' };

const proxy = new Proxy(obj, {
  get(target, prop) {
    console.log(`Accediendo a la propiedad: ${prop}`);
    return prop in target ? target[prop] : 'Propiedad no existe';
  },
  set(target, prop, value) {
    if (typeof value === 'string') {
      console.log(`Estableciendo la propiedad: ${prop} con valor: ${valor}`);
      target[prop] = value;
      return true;
    } else {
      console.warn('Solo se pueden asignar valores tipo string');
      return false;
    }
  }
});

proxy.nombre; // 'Juan' y loguea el acceso
proxy.edad = 25; // Error: solo se permiten strings
proxy.apellido = 'Pérez'; // Asigna y loguea
```
Con proxies, puedes interceptar y validar cualquier tipo de entrada de datos sin tener que escribir validaciones específicas en todas partes del código

```js
Validación de entradas con Proxy
const formData = {
  nombre: '',
  edad: 0
};

const formValidator = new Proxy(formData, {
  set: (obj, prop, valor) => {
    if (prop === 'edad' && (isNaN(valor) || valor < 18)) {
      console.log('La edad debe ser un número mayor o igual a 18');
      return false;
    }
    if (prop === 'nombre' && valor.length < 3) {
      console.log('El nombre debe tener al menos 3 caracteres');
      return false;
    }
    obj[prop] = valor;
    return true;
  }
});

// Intentos de asignación incorrectos
formValidator.edad = 15; // Error: La edad debe ser mayor o igual a 18
formValidator.nombre = 'Jo'; // Error: El nombre debe tener al menos 3 caracteres

// Asignación correcta
formValidator.edad = 25; 
formValidator.nombre = 'Juan'; 

console.log(formData); // { nombre: 'Juan', edad: 25 }
```

[volver](../readme.md)