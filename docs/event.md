# API de Eventos

Los eventos pueden representar cualquier cosa, como por ejemplo, interacciones básicas del usuario para notificar sobre lo que sucede en el modelo de representación. Correponden a objetos que se envían para notificar al código los cambios que hayan ocurrido. Cada evento  se basa en la __interfaz Event__, y puede tener _campos y/o funciones personalizadas_ adicionales para obtener más información. 

|Evento|Descripcion|
|-|-|
| __DOMContentLoaded__ |El documento termino de cargar todo su contenido|
| __load__ | Se ha cargado correctament el contenido de un elemento HTML|
| __progress__ | Se esta descargando contenido Multimedia|
| __mouseover__ | Se ha posicionado el cursor sobre un elemento HTML|
| __mouseout__ | Se ha alejado el cursor de un elemento HTML|
| __click__ | Un elemento ha sido pulsado con el dispositivo señalador|
| __contextmenu__ | Se hizo click con el boton secundario del dispositivo señalador|
| __scroll__ | Se esta utilizando la Barra de desplazamiento de un elemento |
| __focus__ | Se ha enfocado un elemento HTML|
| __blur__ | Se ha perdido el foco de un elemento HTML|
| __input__ | El valor de un campo de formulario ha cambiado|
| __keydown__ | Se ha pulsado una tecla|
| __keypress__ | Se esta presionando una tecla|
| __keyup__ | Se ha soltado la tecla presionada|
| __submit__ | Se ha realizado el envio de un formulario HTML|

## Propagacion

Una de las intenciones de JavaScript con la creación del __patrón de propagación de eventos__ era facilitar la captura de eventos de una fuente, el _elemento padre_, en lugar de configurar un controlador de eventos en cada elemento secundario interno. Hay __tres fases__ por las que pasa la _propagación de eventos_

![event Propagation](https://frontend.turing.edu/lessons/module-1/assets/images/propagation-diagram.png)

1. __capture phase:__ El evento empieza con la propagacion del evento padre, el objeto de window y luego baja por los demás elementos internos.
1. __target phase:__ La segunda fase corresponde cuando se llega al elemento sobre el que se realizo la accion, identificado como _event.target_
1. __bubbling phase:__ El evento se propaga hasta llegar nuevamente al elemento padre superior, aunque el evento no se vuelve a ser llamado.

[volver](../readme.md)