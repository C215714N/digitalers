const button = document.querySelector("button");
button.onclick = liked;

// Se mueve al principio de la ejecucion
function liked () { 
    alert("hiciste click en el boton")
}

/** HOISTING: el interprete mueve las declaraciones para evitar posibles errores de ejecucion
 * function se mueve al principio del objeto window
 * var de inicializa al principio del scope pero se asigna en el lugar
 * let y const se declaran e inicializan en el lugar
 */