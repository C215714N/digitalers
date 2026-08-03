
# Bucles e Iteraciones

En ocasiones deberemos repetir una tarea reiterada cantidad de veces en nuestro codigo en base en una condición. Podemos crear ciclos definiendo un criterio que debe cumplirse y solamente se finalizara la ejecucion del mismo cuando dicho criterio ya no pueda cumplirse.

## Sentencia While

Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar el codigo del cuerpo.

```js
i = 0, 
byte = 8;
while ( i < byte ){
  dec = 2**i;
  console.log(`bit ${i} value is ${dec}`);
  i++;
}
```

## Sentencia Do While

Crea un bucle que evalúa la condición para seguir ejecutándose luego de haber ejecutado el código dentro de su cuerpo, es decir, que el codigo siempre se ejecuta por lo menos una vez.

```js
dec = 200;
bin = '';
value = dec;
do {
  bin = (dec % 2) + bin;
  dec = parseInt(dec / 2);
} while (dec >= 1);
console.log(`binary value of ${value} is ${bin}`);
```

## Sentencia for

Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

```js
bin = '11001000';
dec = 0;
for(i = 0; i < bin.length; i++){
  if(bin[i] == 1){
    dec += 2**(bin.length - (i + 1));
} }
console.log(`decimal value of ${bin} is ${dec}`);
```

## Sentencia for of

Ejecuta un bloque de código para cada elemento de un objeto iterable, como los String, Array, objetos e iterables definidos por el usuario.

```js
units = ['Kilo','Mega','Giga','Tera','Peta','Exa','Zeta','Yota','Bronto','Geop','Sangan'];
for (u of units){
  i = units.indexOf(u) - 1;
  console.log(`1 ${u}Byte is equal to 1000${units[i] || ''} Bytes`);
}
```

[volver](../readme.md)