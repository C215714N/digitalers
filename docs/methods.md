# Comandos de Entrada y Salida

Son aquellos que nos permiten establecer una comunicacion con el usuario final, ya sea mediante la __solicitud de valores__ o mediante la __notificacion en pantalla__ o por __consola__ de los valores resultantes de alguna operacion.

| Comando | Implementacion |
|-|-|
| alert(`message`) | Muestra un mensaje en pantalla |
| prompt(`message`) | Mensaje que solicita al usuario que ingrese datos |
| confirm(`message`) | Mensaje de confirmacion de tipo _boolean_ |
| write(`message`) | Metodo para escribir en el documento HTML |
| console.log(`message`) | Mensaje de salida que se muestra en la consola |

## Captura de elementos

Cuando trabajamos con un __documento HTML__ en ocasiones sera necesario acceder a algun __nodo de la pagina__, por lo tanto estos metodos nos permitiran asociar dichos elementos a una variable para su posterior manipulacion.

| Comando | Implementacion |
|-|-|
| getElementById(`'Id'`) | Devuelve el primer elemento con Id que aparezca en la pagina, segun corresponda |
| getElementsByClassName(`'Class'`) | Devuelve una lista de elementos que concuerden con el nombre de la Clase |
| getElementsByTagName(`'Tag'`) | Devuelve una lista de elementos que correspondan con el tipo de etiqueta |
| querySelector(`'Selector'`) | Devuelve el primer elemento que coincida con el selector cuya sintaxis es similar a css |
| querySelectorAll(`'Selector'`)| Devuelve una lista de elementos que correspondan con el selector |

[volver](../readme.md)