# Variables y tipos de datos

Corresponde a un espacio reservado en la memoria cuyo valor puede cambiar. Suelen declararse al pricipio de nuestro _script_ y deben respetar ciertas reglas para considerarse validas, entre las cuales se encuentran:

* Pueden contener `letras`, `numeros` y los simbolos `$` `_`
* No se admiten espacios u otro tipo de simbolos en su nombre
* El nombre de las mismas __no debe empezar con un numero__
* Se hace distincion entre `mayusculas` y `minusculas`
* No se pueden utilizar __palabras reservadas del lenguaje__

| valido | invalido |
|-|-|
| clase_1 | 1clase |
| $nombre | mi nombre |
| _var | var |

## Declaracion

Segun la palabra clave utilizada podemos determinar el alcance de las variables, su capacidad para ser redeclaradas o que se les reasigne un nuevo valor o tipo de dato. Entre dichas palabras y sus caracteristicas se encuentran las siguientes:

|declarador|ambito|redeclarable|reasignable|
|-|-|-|-|
|var|funcion|si|si
|let|bloque|no|si
|const|bloque|no|no

## Datos Primitivos

Si bien a las variables se les puede reasignar su valor, entre los tipos de datos que pueden almacenar se encuentran los primitivos, que son inmutables y corresponden a los siguientes.

| tipo | descripcion | Ejemplo |
|-|-|-| 
| String | Cadena de texto (escrito entre comillas) | name = "cristian" |
| Number | Digitos de cualquier tipo (entero, decimal, hex, binario) | age = 35
| Boolean | Valor binario (1 bit) | isTeacher = true |
| undefined | tipo de dato sin definir | var address; |
| null | valor inexistente (nulo) | faults = null |
| NaN | valor no numerico (no operable) | courses = 10 - "diez" |

## Datos Complejos

Los objetos en JavaScript son colecciones de pares clave-valor, donde las claves son cadenas (o símbolos) y los valores pueden ser cualquier tipo de datos, incluidos otros objetos.

| tipo | descripcion | ejemplo|
|-|-|-|
| array | matriz de datos con indices numericos, es aconsejable que almacene datos del mismo tipo | languages = ["html", "css", "js", "php", "sql"]
| object | conjunto de pares clave, valor que pueden pertenecer a cualquier tipo de dato | data = { name: "cristian", age: 35, isTeacher: true }
| function | bloque de codigo que se invoca y normalmente devuelve un resultado | function sum(a,b){ return a + b } |

[volver](../readme.md)
