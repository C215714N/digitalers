execute = confirm("¿Deseas gestionar tu Cuenta Bancaria?");
if (execute){
    let option, saldo = 1000, monto, message;
    do {
        option = prompt("Bienvenido a DigiBank, elija la accion que desea realizar:\n1) CONSULTAR\n2) DEPOSITAR\n3) EXTRAER\n4) SALIR");

        switch(option.toUpperCase()){
            case "1":
            case "CONSULTA":
            case "VER SALDO":
            case "CONSULTAR":
                message = "Su saldo actual es: $"+saldo 
            break;
            case "2":
            case "INGRESAR":
            case "DEPOSITO":
            case "DEPOSITAR":
                monto = parseInt(prompt("¿Cuando desea ingresar?"));
                if (!isNaN(monto)){ 
                    saldo += monto;
                    message = "Deposito realizado exitosamente";
                }
                else message = "El valor ingresado No es valido, vuelva a intentar";
            break;
            case "3":
            case "RETIRAR":
            case "SUSTRAER":
            case "EXTRAER":
                monto = prompt("Ingrese la cantidad a retirar")
                if(saldo >= monto){
                    saldo -= monto;
                    message = "Acaba de retirar $"+ monto + " de su cuenta."
                } 
                else message = "Unicamente se admiten valores numericos NO superiores a $"+saldo
            break;
            case "4":
            case "SALIR":
            case "FINALIZAR":
                message = "Muchas gracias por utilizar nuestros servicios\nDigiBank le desea un excelente dia."
            break;
            default: 
                message = "La opcion seleccionada NO se encuentra en la lista";
        }
        alert (message);
    }
    while (option !== "4" && option != "SALIR")
}