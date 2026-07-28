# Estructuras Condicionales

En ciertas ocasiones deberemos generar una bifurcacion en nuestro codigo, donde se llevara a cabo una accion segun el resultado de una condicion, ya sea que se cumpla o no.

## Sentencia if

Para ejecutar varias sentencias en una cláusula, use una __sentencia block ({ ... })__ para agruparlas. Generalmente, es una buena práctica usar siempre sentencias block, especialmente en código que incluya sentencias if anidadas:

```js
if ( test >= 7) {
  console.log('pass');
} else {
  console.log('fail');
}
```

Cualquier valor diferente de __undefined__, null, 0, NaN, o la cadena vacía (""), y cualquier objeto, incluso un objeto Boolean cuyo valor es false, se evalúa como verdadero en una sentencia condicional.

```js
if (speed >= 90) {
  console.log('fast');
} else if (speed >= 40) {
  console.log('regular');
} else {
  console.log('slow');
}
```
## Sentencia Switch

Es una instrucción de __flujo de control__ que prueba el valor de una expresión contra varios casos. La computadora revisará la sentencia switch y __verificará la igualdad estricta === entre el case y la expresión__.

```js
switch(language) {
  case 'spanish':
    console.log('bienvenido al curso de javascript');
  break;
  case 'english':
    console.log('welcome to the javascript course');
  break;
  case 'french':
    console.log('bienvenue dans le cours javascript');
  break;
  case 'portuguese':
    console.log('bem vindo ao curso de javascript');
  break;
  case 'italian':
    console.log('Benvenuti al corso di JavaScript javascript');
  break;
}
```

Podemos establecer multiples casos para un mismo resultando, evitando colocar la clausula _break_ al final de cada bloque.
Si ninguno de los casos coincide con la expresión, se ejecutará la __cláusula predeterminada__.

```js
switch (vehicle) {
  case 'car':
  case 'truck':
  case 'bus':
   console.log("Gasoline or diesel");
  break;
  case 'skate':
  case 'bike':
    console.log("human-powered");
  break;
  case 'hoverboard':
  case 'hibryd car':
  case 'ebike':
    console.log("Electricity");
  break;
  default:
    console.log("Fuel type unknown");
  break;
}
```

[volver](../readme.md)