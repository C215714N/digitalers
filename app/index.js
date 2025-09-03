import clock from "./clock/index.js"
/* IIFE (Inmediatly Invoked Function Expression)
    Funcion utilizada para aislar el acceso a las declaraciones dentro de nuestra aplicacion, brindando mayor seguridad
*/
(() => document.addEventListener("DOMContentLoaded", () => {
    clock();
}))()