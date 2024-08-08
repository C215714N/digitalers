// Variables que almacenan los intervalos
let interval, timeout;
// Simplificacion de Nombres
const ci = clearInterval, cto = clearTimeout;

// Ejecucion de Codigo
console.log("linea 1");
timeout = setTimeout(()=>console.log("linea 2"), 2000) // ejecuta una funcion callback despues de cierto tiempo
console.log("linea 3");
interval = setInterval(() => console.log("linea 4"), 2000) // ejecuta una funciona callback cada cierto tiempos
console.log("linea 5");
console.log("linea 6");
console.log("linea 7");

// Funcion limpiadora
const limpiar = (x,s,callback) => setTimeout(()=>callback(x),s)
// Limpieza de Intervalos
limpiar(interval, 10000, ci);
limpiar(timeout, 2000, cto);