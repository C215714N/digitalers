# Fetch

Interfaz moderna que permite realizar __solicitudes HTTP__ desde el navegador de forma más sencilla y legible que `XMLHttpRequest`. Utiliza _promesas_ para manejar la asincronía, lo que facilita la escritura de código limpio y estructurado.

Algunas de sus características principales son:

* __fetch(`url`, `options`)__: Función que inicia la solicitud HTTP.
* __Response.ok__: Propiedad booleana que indica si la respuesta fue exitosa.
* __Response.status__: Código de estado HTTP recibido.
* __Response.headers__: Cabeceras de la respuesta.
* __Response.json()__: Método que convierte el cuerpo de la respuesta en objeto JSON.
* __Response.text()__: Método que devuelve el cuerpo como texto plano.

## Implementación

La función `fetch` devuelve una promesa que se resuelve cuando se recibe la respuesta. Esto permite encadenar `.then()` y `.catch()` para manejar los resultados y errores de forma más clara que con callbacks.

```js
function getData(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Error en la solicitud");
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error("Se produjo un error:", error));
}
```

[volver](../readme.md)