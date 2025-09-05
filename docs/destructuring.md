# Destructuración

La destructuración se utiliza para extraer valores de arrays u objetos de manera concisa y asignarlos a variables. Es útil para trabajar con datos complejos (como respuestas de APIs) de forma eficiente y clara.

* Extraer datos de objetos o arrays sin necesidad de múltiples asignaciones individuales
* Asignar valores por defecto cuando algunos datos pueden faltar
* Intercambio de variables de forma rápida

```js
// Destructuración de arrays
const [x, y] = [10, 20];
console.log(x); // 10
console.log(y); // 20

// Destructuración de objetos con valores por defecto
const { nombre, edad = 18 } = { nombre: 'Juan' };
console.log(nombre); // 'Juan'
console.log(edad); // 18 (valor por defecto)
```

[volver](../readme.md)