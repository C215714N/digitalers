var execute = confirm("¿Deseas practicar las tablas?");
if (execute){
    let ul = document.getElementById("while");
    let n = prompt("¿Escribe el numero de la tabla que deseas practicar?");
    let isNumber = !isNaN(parseInt(n))
    if (isNumber) {
        let i = 1;
        while (i <= 100) {
            let li = document.createElement('li');    // Creamos un Nodo HTML
            li.innerHTML = n + "x" + i + "=" + n * i; // Agregamos Contenido
            ul.appendChild(li);                       // Anidamos el Nodo al Documento
            i++;                                      // Incrementamos el valor del Iterador
        }
    } else {
        ul.innerHTML = "<li>el valor " + n +" no es un numero valido </li>"
    }
}