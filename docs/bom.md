# BOM (Browser Object Model)

El objeto __window__ es compatible con todos los navegadores y representa la _ventana del Navegador_. Todos los objetos, funciones y variables globales se convierten automáticamente en miembros del objeto de window. Las __variables globales__ son _propiedades_ del objeto window y las funciones globales son _métodos_. No existen estándares oficiales para el modelo de objetos de navegador debido a que los navegadores modernos han implementado los casi los mismos métodos y propiedades para la interactividad de JavaScript.

## Propiedades

Lo que vemos como una _ventana que muestra un documento_, el navegador web lo ve como __colección jerárquica de objetos__. Cuándo el navegador analiza un documento, crea una colección de objetos que definen el documento y detallan cómo debe ser mostrado. El _objeto que el navegador_ crea se conoce como __Document Object__.

| Propiedad | Descripcion |
|-|-|
| __innerHeight__ | Devuelve el alto interno de la ventana |
| __innerWidth__ | Devuelve el ancho interno de la ventana |
| __outterHeight__ | Devuelve el alto total de la ventana |
| __outterWidth__ | Devuelve el ancho total de la ventana |
| __screenX__ | Posición horizontal de la ventana respecto al monitor |
| __screenY__ | Posición vertical de la ventana respecto al monitor |
| __scrollX__ | Posición horizontal de desplazamiento actual en la ventana |
| __scrollY__ | Posición vertical de desplazamiento actual en la ventana |
| __location__ | Devuelve el objeto Ubicacion |
| __history__ | Devuelve el objeto Historial |
| __navigator__ | Devuelve el objeto Navegador |

## Metodos

El __nivel superior__ de la jerarquía es el _objeto window_, que contiene la información sobre la ventana que muestra el documento. Algunos de los objetos window son objetos propiamente dichos que describen el documento y la información relacionada. Los proveedores de navegadores son libres de implementar el BOM de cualquier manera que deseen

| Metodo | Descripcion |
|-|-|
| __alert(`message`)__ | Muestra un mensaje en pantalla |
| __prompt(`message`)__ | Cuadro de dialogo para el ingreso datos |
| __confirm(`message`)__ | Cuadro de dialogo de confirmacion |
| __open(`URL`,`name`,`specs`)__ | Abre una nueva ventana de navegador |
| __resizeTo(`width`,`height`)__ | Establece las dimensiones de la ventana |
| __resizeBy(`width`,`height`)__ | Aumenta el tamaño de la ventana |
| __scrollTo(`x`,`y`)__ | Desplaza la ventana a las coordenadas especificadas |
| __scrollBy(`x`,`y`)__ | Desplaza la ventana de manera relativa a su posicion actual |
| __close()__ | Cierra la ventana actual si fue abierta por script |

[volver](../readme.md)