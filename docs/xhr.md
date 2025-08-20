# XMLHttpRequest

Interfaz que permite realizar __solicitudes HTTP__ desde el navegador sin necesidad de recargar la pagina. Es ampliamente utilizada en aplicaciones web para implementar _comunicacion asincronica con el servidor_. Algunos de los metodos y propiedades que posee, son los siguientes.

* __readyState__: Propiedad que indica el estado actual de la solicitud.
* __status__: Propiedad que corresponde al codigo de respuesta HTTP recibido.
* __responseText__: Propiedad que indica contenido de la respuesta.
* __onreadystatechange__: Metodo que se ejecuta cuando cambia el estado.
* __open(`method`, `url`, `async`)__: Metodo que inicializa la solicitud.
* __send(`body`)__: Metodo que realiza el envio la solicitud.
* __setRequestHeader(`header`, `value`)__: Metodo que establece las cabeceras HTTP.

## ReadyState

Estado que define en que etapa se encuenta una peticion asincrona, su valor cambia a medida que progresa la solicitud y son 5 valores correspondientes a los siguientes codigos:

* __0 *(UNSENT)*__: La solicitud no ha sido inicializada con `open()`.
* __1 *(OPENED)*__: Se ha llamado a `open()`, pero aún no se ha enviado la solicitud.
* __2 *(HEADERS_RECEIVED)*__: Se han recibido las cabeceras de la respuesta.
* __3 *(LOADING)*__: El cuerpo de la respuesta está siendo recibido.
* __4 *(DONE)*__: La operación ha finalizado y la respuesta está disponible.

## Implementacion

A pesar de ser una forma flexible y potente de controlar la asincronía, que permite realizar múltiples posibilidades, las funciones callbacks tienen ciertas desventajas evidentes. En primer lugar, el código creado con las funciones es algo caótico y tener que pasar un __NULL__ como parámetro en algunas funciones es poco elegante.

```js
function getData(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () =>
        xhr.status === 200 ? 
        callback(null, JSON.parse(xhr.responseText)) : 
        callback("se produjo un error", null)
    )
    xhr.open('GET',url);
    xhr.send();
}
```

[volver](../readme.md)