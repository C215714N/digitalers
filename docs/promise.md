# Promise

Es un proxy de un valor que no se conoce necesariamente y le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona. Esto permite a los métodos asíncronos que en lugar de devolver inmediatamente el valor final, devuelvan la promesa que proporciona el valor, en algún momento futuro.

|estado|descripcion|
|-|-|
| __pending__ | la operacion esta pendiente, estado inicial |
| __fulfilled__ | la operación se completó con éxito |
| __rejected__ | la operación falló por algun motivo |

## Encadenamiento

Una _promesa pendiente puede cumplirse_ con un valor o _rechazarse con un motivo (error)_. Cuando ocurre cualquiera de estas opciones, se llama a los controladores asociados en cola por el _método then_. Si la promesa ya se ha cumplido o rechazado cuando se adjunta un manejador correspondiente, se llamará al manejador, por lo que no existe una condición de carrera entre la finalización de una operación asíncrona y la conexión de sus manejadores.

| metodo | descripcion |
|-|-|
| __then__(`resolve`,`reject`) | Permite adjuntar funciones para manejar el éxito o el rechazo de la promesa |
| __catch__(`reject`) | Permite manejar explicitamente los errores de rechazo de la promesa |
| __finally__(`callback`) | Permite ejecutar una función independientemente del resultado, útil para limpiar recursos |

## Implementacion 

Las promesas permiten estructurar el flujo asincrónico de forma más clara, evitando el uso excesivo de callbacks anidados (_callback hell_). Se crean mediante el constructor `Promise`, que recibe una función con dos parámetros: `resolve` y `reject`.

```js
const validateUser = (user) = new Promise((resolve, reject) => {
    const userList = ["ADMIN", "GUEST"]
    userList.includes(user.toUpperrCase()) ? 
    resolve("Usuario autenticado") : 
    reject("Usuario no autenticado");
});
validateUser("admin")
    .then(result => console.log("Resultado:", result))
    .catch(error => console.error("Error:", error))
    .finally(() => console.log("Finalizó la operación"));
```

[volver](../readme.md)