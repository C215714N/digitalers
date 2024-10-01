## Objetos Globales

### console

Objeto que ofrece métodos para imprimir información y errores en la consola estándar. Es bastante útil debido a que facilita la visualización de datos y la depuración de aplicaciones. 

| Metodo | Descripción |
|--|--|
| __log__	| Imprime mensajes en la consola estándar |
| __error__ | Imprime mensajes de error en la consola estándar |
| __warn__ | Imprime advertencias en la consola estándar |
| __info__ | Imprime información en la consola estándar |

### process

Interfaz para interactuar con el entorno del proceso de ejecución. Permite acceder a información y controlar el comportamiento del mismo; así como gestionar eventos y configuraciones relacionadas con el proceso.

| Propiedad | Tipo | Descripcion |
|--|--|--|
| __arch__ | _String_ | Propiedad que devuelve la arquitectura del sistema operativo actual |
| __argv__ | _Array_ | Propiedad que almacena los _argumentos_ pasados a la aplicacion que se esta ejecutando actualmente. |
| __cpuUsage__ | _Function_ | Metodo que devuelve un objeto que indica el consumo de memoria del procesador |
| __cwd__ | _Function_ | Metodo que devuelve un string con la ruta absoluta del directorio de trabajo actual |
| __env__ | _Object_ | Propiedad que contiene las _variables de entorno_ de la sistema operativo en el que se esta ejecutando. |
| __memoryUsage__ | _Function_ | Metodo de devuelve un objeto que detalla el uso de la memoria |
| __release__| _Object_ | Propiedad que contiene informacion relacionada con el version actual de NodeJS |
| __versions__ | _Object_ | Propiedad que almacena las versiones de los _modulos instalados_ y sus respectivas dependencias. | 

### timers

Mecanismos que permiten programar la ejecución de funciones después de un período de tiempo específico o en intervalos regulares. Estos se basan en el módulo de temporización del entorno de ejecución de Node.js, que a su vez utiliza las funciones del sistema operativo para gestionar los tiempos de espera.

| Metodo | Descripcion |
|--|--|
| __setImmediate__ | Programa la ejecución de una funcion al final de la cola de eventos |
| __setInterval__ | Ejecucion repetida de una funcion en intervalos de tiempo específicos |
| __setTimeout__ | Ejecuta una funcion después de un tiempo específico |
| __clearImmediate__ | Cancela una función programada con setImmediate() |
| __clearInterval__ | Cancela una función programada con setInterval() |
| __clearTimeout__ | Cancela una función programada con setTimeout() |

[Volver](../readme.md)