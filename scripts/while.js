if (confirm('¿Deseas visualizar alguna tabla de Multiplicacion?')) {
    var base = 1;
    var errorCount = 0;
    var tabla = prompt('Escribe el numero de la tabla que deseas practicar');
    var totalUsuario = prompt('Escribe el numero de la cantidad de resultados a mostrar');
    var total = parseInt(totalUsuario);
    document.write("<ul>");
    // El Bucle se Repite MIENTRAS se Cumpla la condicion
    while(base <= total && errorCount < 1) {
        if (!isNaN(parseInt(tabla)))
            document.write(`<li>${tabla} x ${base} = ${tabla * base}</li>`);
        else errorCount++
        base++
    }
    if (isNaN(total)) errorCount++
    if (errorCount) document.write(`<li>Se produjo ${errorCount} error, al utilizar el valor ${tabla} para ${total} Resultados</li>`);
    document.write("</ul>")
    console.log(
        "VALORES INGRESADOS",
        "\nTabla:", tabla, 
        "\nResultados:", total,
        "\nErrores:", errorCount
    );
}