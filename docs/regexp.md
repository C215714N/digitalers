# Expresiones Regulares

Son __patrones__ que se utilizan para hacer coincidir __combinaciones de caracteres en cadenas__. En JavaScript, las expresiones regulares también son objetos. Los patrones simples se construyen con caracteres para los que deseas encontrar una coincidencia directa, estos pueden pertenecer a los siguientes tipos:

## Caracteres

Son valores reservados que se utilizan para distinguir entre diferentes tipos de caracteres o su opuesto en caso que se escriba en mayusculas o se incorpore el signo de potencia dentro del selector.

| clase | coincidencia | opuesto |
|-|-|-|
| __\w__    | palabras | __\W__
| __\d__    | digitios | __\D__
| __\s__    | espacios | __\S__
| __[ABC]__ | conjunto | __[^ABC]__

## Cuantificadores

Correponde a signos que indican grupos y rangos de caracteres de la expresion, se utilizan inmediatamente despues de la referencia. Tambien indican la cantidad de repeticiones que deben coincidir.

| cuantificador | coincidencia |
|-|-|
| __?__ | cero o una repeticion |
| __+__ | una o mas repeticiones |
| __*__ | cero, una o mas repeticiones |
| __\|__ | alternacion de caracteres |
| __{n}__ | cantidad fija de repeticiones |
| __{n,}__ | minimo de repeticiones|
| __{n,m}__ | min. y max. de repeticiones |

## Ascerciones

Establecen los límites que indican el comienzo y el final de líneas y palabras de la expresion. Asi como otros patrones que indican de alguna manera que el reconocimiento es posible.

| posicion  | coincidencia |
|-|-|
| __^__     | principio de una linea
| __$__     | final de una linea
| __\b__    | perimetro de una cadena
| __\B__    | no esta en el perimetro

[volver](../readme.md)