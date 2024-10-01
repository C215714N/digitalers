## Módulos Integrados

### os

Módulo que permite obtener información sobre el entorno del sistema, como la arquitectura de la CPU, la memoria disponible y el sistema de archivos. Esto es útil para la depuración, el monitoreo y la optimización del rendimiento de las aplicaciones.

| Método | Descripción |
|--|--|
| __arch__ | Devuelve la arquitectura de la CPU ('x64', 'arm', 'arm64', etc.) |
| __cpus__ | Devuelve una lista de objetos con información sobre cada CPU, incluyendo el modelo, velocidad y tiempos de uso |
| __freemem__ | Devuelve la cantidad de memoria libre en bytes |
| __totalmem__ | Devuelve la cantidad total de memoria del sistema en bytes |
| __hostname__ | Devuelve el nombre del host del sistema |
| __networkInterfaces__ | Devuelve un objeto con información sobre las interfaces de red del sistema, incluyendo direcciones IP, MAC y más |
| __platform__ | Devuelve una cadena que representa el sistema operativo ('darwin', 'freebsd', 'linux', 'sunos', 'win32') |
| __release__ | Devuelve la versión del sistema operativo |
| __tmpdir__ | Devuelve el directorio temporal del sistema |
| __uptime__ | Devuelve el tiempo de actividad del sistema en segundos desde el último inicio |
| __userInfo__ | Devuelve información sobre el usuario actual, como username, uid, gid, shell, y homedir |
| __endianness__ | Devuelve el orden de bytes del sistema ('BE' o 'LE') |

### url

Modulo que proporciona utilidades que facilitan el análisis, la resolución y la manipulación de las URLs en las aplicaciones. Este módulo es útil para aplicaciones web y servidores que necesitan construir, analizar o resolver URLs en sus procesos

| Método | Descripción |
|--|--|
| __parse__ | Devuelve un objeto con propiedades que representan los componentes de la URL |
| __format__ | Construye una URL a partir de un objeto (_protocol, host, pathname, search, hash, etc._) |
| __resolve__ | Convierte una URL relativa en una ruta absoluta |
| __URL__ | Clase para crear y manipular URLs con una interfaz orientada a objetos |
| __URLSearchParams__ | Clase para trabajar con los parámetros de búsqueda de la URL |

### path

proporciona utilidades para manejar y transformar rutas de archivos en el sistema de archivos. Simplifica la manipulación de nombres de archivo y directorios y ayuda a crear rutas compatibles con diferentes sistemas operativos.

| Propiedad | Descripción |
|--|--|
| __parse__ | Devuelve un objeto con las propiedades _root, dir, base, ext, y name_ |
| __resolve__ | Resuelve una secuencia de rutas en una ruta absoluta |
| __dirname__ | Devuelve el directorio de una ruta excluyendo el nombre del archivo |
| __basename__ | Devuelve el nombre del archivo en una ruta |
| __extname__ | Devuelve la extensión de archivo en una ruta, incluyendo el punto |
| __join__ | Une varios segmentos de ruta en una sola |
| __format__ | Devuelve una ruta a partir de un objeto con _dir, base, name y ext_ |

### fs (File System)

proporciona una API para interactuar con el sistema de archivos, permitiendo operaciones como leer, escribir y eliminar archivos.

| Propiedad | Descripción |
|--|--|
| __readFile__	| Lee el contenido de un archivo de manera asíncrona |
| __writeFile__	| Escribe datos en un archivo de manera asíncrona |
| __appendFile__ | Añade datos a un archivo de manera asíncrona |
| __unlink__	| Elimina un archivo |

[Volver](../readme.md)