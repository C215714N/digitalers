# async/await

Característica que proporciona una forma más concisa y fácil de trabajar con funciones asíncronas y promesas. async se utiliza para declarar que una función devuelve una promesa y permite usar await dentro de esa función para esperar a que una promesa se resuelva o se rechace antes de continuar con la ejecución del código. 

| concepto | descripción |
|-|-|
| __async function__ |	Declaración de una función como asíncrona, que _retorna Promise_ |
| __await__ |	Utilizado para esperar de manera síncrona la _resolución de la promesa_ |
| __try/catch__ | _Manejo de errores_ que capturan excepciones de operaciones asincrónicas |
| __Paralelismo__ |	Se puede lograr esperando múltiples promesas con _Promise.all() y await_ |
| __Compatibilidad__ |	Se puede utilizar en _navegadores modernos y entornos Node.js_ |

## Try... Catch

__async/await__ es una herramienta poderosa que simplifica la escritura y el manejo de código asíncrono en JavaScript, mejorando la legibilidad y mantenibilidad del código en comparación con el uso tradicional de callbacks y encadenamiento de promesas.

```js
async function getData({url, ...req}) {
    try {
        const res = await fetch(url,req);
        if (!res.ok) throw new Error("error: "+ res.status);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
}
```

[volver](../readme.md)