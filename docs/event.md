# API de Eventos

Los eventos pueden representar cualquier cosa, como por ejemplo, interacciones básicas del usuario para notificar sobre lo que sucede en el modelo de representación. Correponden a objetos que se envían para notificar al código los cambios que hayan ocurrido. Cada evento  se basa en la __interfaz Event__, y puede tener _campos y/o funciones personalizadas_ adicionales para obtener más información. 

|Evento|Descripcion|
|-|-|
|_DOMContentLoaded_|El documento termino de cargar todo su contenido|
|_load_| Se ha cargado correctament el contenido de un elemento HTML|
|_progress_| Se esta descargando contenido Multimedia|
|_mouseover_| Se ha posicionado el cursor sobre un elemento HTML|
|_mouseout_| Se ha alejado el cursor de un elemento HTML|
|_click_| Un elemento ha sido pulsado con el dispositivo señalador|
|_contextmenu_| Se hizo click con el boton secundario del dispositivo señalador|
|_scroll_| Se esta utilizando la Barra de desplazamiento de un elemento |
|_focus_| Se ha enfocado un elemento HTML|
|_blur_| Se ha perdido el foco de un elemento HTML|
|_input_| El valor de un campo de formulario ha cambiado|
|_keydown_| Se ha pulsado una tecla|
|_keypress_| Se esta presionando una tecla|
|_keyup_| Se ha soltado la tecla presionada|
|_submit_| Se ha realizado el envio de un formulario HTML|

## Propagacion

Una de las intenciones de JavaScript con la creación del __patrón de propagación de eventos__ era facilitar la captura de eventos de una fuente, el _elemento padre_, en lugar de configurar un controlador de eventos en cada elemento secundario interno. Hay __tres fases__ por las que pasa la _propagación de eventos_

![event Propagation](https://frontend.turing.edu/lessons/module-1/assets/images/propagation-diagram.png)

1. __capture phase:__ El evento empieza con la propagacion del evento padre, el objeto de window y luego baja por los demás elementos internos.
1. __target phase:__ La segunda fase corresponde cuando se llega al elemento sobre el que se realizo la accion, identificado como _event.target_
1. __bubbling phase:__ El evento se propaga hasta llegar nuevamente al elemento padre superior, aunque el evento no se vuelve a ser llamado.

[volver](../readme.md)