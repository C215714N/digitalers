# callBack

Es una función que se pasa a otra __función como un argumento__ y que luego _se invoca dentro de la función externa_ para completar algún tipo de rutina o acción. Los callbacks aseguran que una función se ejecute despues de que se resuelva una tarea, para ello es necesario pasarla como parámetro y luego llamarla de vuelta después de que haya ocurrido algo o se haya completado alguna tarea.

## Metodos

Cuando trabajamos con arrays o necesitamos definir un intervalo o funcion de tiempo, Javascript nos ofrece unos metodos nativos, que podemos aprovechar. A continuacion se identifican algunos, junto a una lista de terminos comunes para facilitar su comprension.

* __cbFn__: funcion invocada (callBack)
* __args__: argumentos de la funcion (callback)
* __el__: elemento del array (iteracion)
* __i__: indice del array (iteracion)
* __Arr__: array de referencia (iteracion)
* __acc__: variable acumuladora (iteracion)
* __dy__: retraso en milisegundos (tiempo)

| funcion | parametros | descripcion
|-|-|-|
| __forEach__(`cbFn`) | `el`, `i`, `Arr` | ejecuta una funcion callback por cada elemento dentro de un array |
| __filter__(`cbFn`) | `el`, `i`, `Arr` | ejecuta una funcion que devuelve cada elemento que coincida |
| __find__(`cbFn`) | `el`, `i`, `Arr` | encuentra el primer elemento que devuelva la funcion callback |
| __map__(`cbFn`) | `el`, `i`, `Arr` | genera un array nuevo a partir del resultado de la funcion |
| __findIndex__(`cbFn`) | `el`, `i`, `Arr` | devuelve el indice del primer elemento que corresponda |
| __reduce__(`cbFn`) | `acc`, `el` | sumariza todos los valores de un array en una valor acumulado |
| __setInterval__(`cbFn`, `dy`) | `args` | ejecuta una funcion callback cada cierto periodo de tiempo |
| __setTimeout__(`cbFn`, `dy`)  | `args` | ejecuta una funcion despues de transcurrido cierto lapso de tiempo |

[volver](../readme.md)