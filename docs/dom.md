# DOM (Document Object Model)

Cuando se carga una página web, el navegador crea un __modelo de objeto de documento__ de la página que se construye como un árbol de objetos. Es un estándar sobre cómo obtener, cambiar, agregar o eliminar elementos HTML y es un modelo de objeto estándar y una interfaz de programación para HTML que se define por las siguientes caracteristicas:

* Los elementos HTML como objetos
* Las propiedades de todos los elementos HTML
* Los métodos para acceder a todos los elementos HTML
* Los eventos para todos los elementos HTML

## Propiedades

Los programas pueden acceder y modificar el contenido a través del DOM, la estructura y el estilo de los documentos mencionados, que es para lo que se diseñó principalmente. De esta manera el DOM permite _acceso dinámico_ a través de la programación para __acceder, añadir y cambiar dinámicamente contenido estructurado__ en documentos con lenguajes como ECMAScript. 

| Propiedad | Descripcion |
|-|-|
| __title__ | Devuelve el titulo de la pestaña |
| __URL__ | Devuelve la direccion URL de la pagina |
| __characterSet__ | Devuelve la codificacion de caracteres utilizada |
| __head__ | Devuelve el objeto __HEAD__ del documento |
| __body__ | Devuelve el objeto __BODY__ del documento |
| __links__ | Devuleve un array de objetos __&lt;A>__ |
| __images__ | Devuelve un array de objetos __&lt;IMG>__ |
| __activeElement__ | Devuelve el elemento que posee el foco |

## Metodos

El DOM es una de las APIs más usadas en la Web, pues __permite ejecutar código en el navegador__ para acceder e _interactuar con cualquier nodo_ del documento. Estos nodos pueden crearse, moverse o modificarse. Pueden añadirse a estos nodos __manejadores de eventos (event listeners)__ que se _ejecutarán y/o activaran_ cuando ocurra el __evento indicado__ en este manejador.

| Metodo | Descripcion |
|-|-|
| __createElement(`tag`)__ | Crea un Elemento HTML |
| __getElementById(`id`)__ | Devuelve el objeto con el id especificado |
| __getElementsByClassName(`className`)__ | Devuelve un array de objetos por su nombre de clase    |
| __getElementsByName(`name`)__ | Devuelve un array de objetos con el atributo name    |
| __getElementsByTagName(`tagname`)__ | Devuelve un array de objetos por su tipo de etiqueta   |
| __querySelector(`selector`)__ | Devuelve el primer elemento que coincide con un selector CSS |
| __querySelectorAll(`selector`)__ | Devuelve una lista de nodos que coinciden con un selector CSS |
| __addEventListener(`event`,`function`)__ | Adjunta un controlador de eventos al documento |

[volver](../readme.md)