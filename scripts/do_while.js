if (confirm('¿deseas acceder a tu cuenta bancararia en DIGIBANK?')) {
    var SALDO = 1000;
    var DESCUBIERTO = 1000;
    // Se ejecuta una vez y se repite MIENTRAS se cumpla la condicion
    do {
        var operacion = prompt(`
        BIENVENIDO A DIGIBANK
        Elija la operacion que desea llevar a cabo:
            1) CONSULTAR SALDO
            2) DESPOSITAR
            3) EXTRAER
            4) SALIR
        `).toUpperCase();
        switch(operacion){
            case "1":
            case "CONSULTAR":
                resultado = `su saldo actual es de $ ${SALDO}`
            break;
            case "2":
            case "DEPOSITAR":
                MONTO = parseFloat(prompt("¿cuanto desea ingresar?"));
                if (!isNaN(MONTO)){
                    SALDO+= MONTO
                    resultado = `El deposito de $ ${MONTO} se realizo exitosamente.`;
                }
                else resultado = `El monto ingresado NO ES VALIDO, intente nuevamente.`
            break;
            case "3":
            case "EXTRAER":
                MONTO = parseFloat(prompt("¿Cuanto desea retirar?"));
                if (MONTO <= (SALDO + DESCUBIERTO)) {
                    SALDO -= MONTO;
                    resultado = `Ya puede retirar el monto de $ ${MONTO}, quedan $ ${SALDO}.`
                    if (SALDO < 0) resultado += " Recuerde cubrir el monto descubierto para evitar recargos"
                }
                else resultado = `No se pudo realizar la operacion. Corrobore que el monto ingresado no sea mayor a $ ${SALDO}`
            break;
            case "4":
            case "SALIR":
                resultado = "¡¡Gracias por utilizar nuestros servicios, \nDIGIBANK le desea un Feliz Dia!!"
            break;
            default:
                resultado = "La opcion elegida NO ES VALIDA, intente nuevamente"
        }
        alert(resultado);
    } while (operacion != "4" &&  operacion != "SALIR")
}