if (confirm('¿deseas acceder a tu cuenta bancararia en DIGIBANK?')) {
    do {
        var operacion = prompt(`
        BIENVENIDO A DIGIBANK
        Elija la operacion que desea llevar a cabo:
            1) CONSULTAR SALDO
            2) DESPOSITAR
            3) EXTRAER
            4) SALIR
        `);
        switch(operacion){
            case "1":
            case "CONSULTAR":
                resultado = "su saldo actual es de ..."
            break;
            case "2":
            case "DEPOSITAR":
                resultado = "cuanto desea ingresar..."
            break;
            case "3":
            case "EXTRAER":
                resultado = "cuanto desea retirar..."
            break;
            case "4":
            case "SALIR":
                resultado = "gracias por utilizar nuestros servicios, DIGIBANK le desea un feliz dia"
            break;
            default:
                resultado = "la opcion elegida NO ES VALIDA, intente nuevamente"

        }
        alert(resultado);
    } while (operacion != "4" &&  operacion != "SALIR")
}