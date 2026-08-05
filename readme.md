# Javascript desde Cero

Esto es una guia para los alumnos de la capacitacion __digitalers nodejs__ que cursan los dias _lunes y miercoles 19hs a 22hs_ donde podran acceder a las practicas y descargar los contenidos realizados durantes las clases.

## Tabla de Contenidos

* [Lenguajes de Programacion](docs/programming.md)
* [Variables y tipos de datos](docs/datatypes.md)
* [Expresiones y Operadores](docs/operators.md)
* [Estructuras Condicionales](docs/conditionals.md)
* [Bucles e Iteraciones](./docs/loops.md)
* [Comandos de Entrada y Salida](./docs/methods.md)
* [Arreglos - Propiedades y Metodos](./docs/array.md)

---

## Ejercicios

1. Estructuras Condicionales:
	1. Realiza un script que determine si un numero ingresado es par o impar
	1. Desarrolla un script que indique al usuario a que grupo pertenece el dia la semana ingresado, utilizando los valores "DIA HABIL" y "FIN DE SEMANA" segun corresponda. Opcionalemente puedes agregar un valor predeterminado como "NO SE PUDO IDENTIFICAR EL DIA INGRESADO", para cualquier opcion invalida.
	1. Dados 2 numeros ingresados por el usuario, elabora un script que identifique cual de los valores es mayor.
	1. Un cliente desea adquirir un producto y, para el valor ingresado, necesita saber ¿cual seria el total si recibe un 15% de descuento por abonar en efectivo?. Ademas, necesita que se le indique ¿cual seria el monto final si tiene un 10% de recargo al abonar con tarjeta de credito?
	1. Elabora un script que devuelva la edad del usuario en base a su año de nacimiento, el mismo debera identificar si el valor ingresado corresponde a un numero valido, es decir, que no supere el maximo de esperanza de vida que son 125 años.
1. Bucles e Iteraciones:
	1. Desarrolla un script que calcule la sumatoria de todos los valores entre 0 y un numero entero positivo ingresado por el usuario. Opcionalmente agrega un mensaje para notificar que ingreso un valor invalido, ademas de un limite (por ejemplo: 100) para impedir el calculo de infinitos valores.
	1. Realice un script que consulte al usuario cuantos valores desea ingresar y luego calcule el promedio de los mismos.
	1. Elabora un script que simule un inicio de sesion, utilizando como valores de comparacion el usuario "admin" y contraseña "R00t", el mismo deber contar cuantas veces el usuario intento ingresar y cerrarse cuando se superen los 3 intentos fallidos. El mensaje debera variar segun el contexto, siendo "Bienvenido admin" en caso que los datos sean correctos o "Demasiados intentos Fallidos"
	1.
1. Calculadora de porcentajes:
    1. Crear un formulario que posea los siguientes elementos 
        * Campo Monto para el numero
        * Campo de seleccion con las opciones Producto y Servicio
        * Campo deshabilitado que muestre un porcentaje
        * Campo deshabilitado que muestre el precio final
    1. Armar un script para la interfaz que permita calcular el 10.5% para Producto o el 21% para  Servicio
1. Calculadora de Superficie:
    1. Crear un formulario con los siguientes Campos:
        * Selector de Figura (rectangulo, triangulo)
        * Numero para los Valores de Base y Altura
    2. Desarrolla es script correspondiente para que se calcule el area de la figura seleccionada teniendo en cuenta lo siguiente
        | Figura | Formula | Descripcion
        |-|-|-|
        | __Cuadrado__ | $b * h$ | Base por Altura |
        | __Triangulo__ | $\dfrac{b * h}{2}$ | Base por altura sobre dos |
    3. Opcionalmente puedes agregar las siguientes figuras, editando el formulario de ser necesario:
        | Figura | Formula | Descipcion |
        |-|-|-|
        |__Rombo__ | $\dfrac{D * d}{2}$ | Diagonal Mayor por diagonal Menor sobre 2 |
        | __Circulo__ | $\pi * r^2$ | Pi por radio al cuadrado
        | __Poligono__ | $\dfrac{P * a}{2}$ | Perimetro por apotema sobre 2 |