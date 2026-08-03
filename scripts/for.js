if (confirm("¿desea imprimir alguna secuencia de numeros?")) {
    let resultados = parseInt(prompt('¿cuantos numeros deseas imprimir?')) ?? 0;
    document.write("<ul>");
    for(let i = 0; i <= resultados; i++){
        document.write(`<li>2^${i}=${2**i}</li>`);
    }
    document.write("</ul>");
    const units = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    // Recorre cada uno de los elementos de un Array
    for (let u of units){
        document.write(`<p>${u}</p>`);
    }
}