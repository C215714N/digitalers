# Maquetador Web Avanzado

Esto es una guia para los alumnos de la capacitacion __Maquetacion web con HTML y CSS__ que cursan los dias _martes y jueves de 19hs a 22hs_, donde podran acceder a los contenidos vistos en clase.

## Background

Esta propiedad se utiliza para definir los valores individuales del fondo de una etiqueta. Se puede usar para definir los valores de una o de todas las siguientes propiedades.

| Background | Descripcion |
|--|--|
| __background-attachment__ | Propiedad que determina si la image se fijara con respecto a la pantalla o la etiqueta contenedora. |
| __background-color__ | Propiedad define el color de fondo de un elemento, puede ser un valor o la palabra _"transparent"_ |
| __background-image__ | Propiedad que establece una o más imágenes de fondo para un elemento, utilizando la funcion _url()_ |
| __background-position__ | Propiedad que define donde inicia la imagen, admite las palabras clave _top center bottom left y right_ |
| __background-size__ | Propiedad que especifica el tamaño de las imágenes, admite valores y palabras clave como _cover y contain_ |
| __background-repeat__ | Propiedad que define como se repiten los fondos, puede ser  sobre el _eje horizontal, vertical, ambos o ninguno_ |

## Flexbox

__El Módulo de Caja Flexible__ fue diseñado como un _modelo unidimensional de layout_, y como un método que pueda ayudar a _distribuir el espacio entre los ítems de una interfaz_ y mejorar las capacidades de alineación. Para crear un contenedor flex, establecemos la propiedad display del contenedor como __flex__ o __inline-flex__. Tan pronto como hacemos esto, __los hijos directos de este se vuelven ítems flex__.

### Propiedades Contenedor Flex

| Flexbox |Descripcion|
|--|--|
| __justify-Content__ | propiedad usada para alinear los ítems en _el eje principal_. El valor inicial es __flex-start__ que alineará los ítems al inicio del margen del contenedor |
| __align-items__ | propiedad que alinea los ítems sobre el _eje cruzado_. El valor inicial es __stretch__ y haciendo que los ítems ajusten sus dimensiones para llenar el contenedor |
| __flex-direction__ | propiedad que permite cambiar la dirección de los ítems. El valor __row-reverse__ mantiene el despliegue a lo largo de la fila, pero el inicio y final quedarán invertido |
| __flex-wrap__ | propiedad especifica si los elementos son obligados a permanecer en una misma línea o pueden fluir en varias líneas, permite controlar la dirección de apilamiento |

### Valores de Alineacion y Distribucion

| Valor | Descripcion |
|--|--|
| __flex-start__ | ubica los elementos al inico del _contendor flex_ |
| __center__ | ubica los elementos en el centro del _contenedor flex_ |
| __flex-end__ | ubica los elementos al final del _contenedor flex_ |
| __space-around__ | separa los elementos sumando las distancias intermedias sobre el _eje principal_ |
| __space-between__ | separa los elementos ubicando al primero y al ultimo a los extremos del _eje principal_ |
| __space-evenly__ | separa los elementos de manera totalmente equitativa sobre el _eje principal_ |
| __baseline__ | alinea las etiquetas sobre el _eje cruzado_ en funcion del tamaño de la tipografia |

### Propiedades Items Flex

| Propiedad | Descripcion |
|--|--|
| __flex-grow__ | propiedad que determina cuanto espacio restante del contenedor flex debe ocupar un item |
| __flex-shrink__ | propiedad que determina cuanto se encogerán los items para rellenar el contenedor flex |
| __flex-basis__ | propiedad que determina el tamaño de una caja de contenidos dentro del contenedor flex |
| __align-self__ | propiedad que alinea los items flexibles reemplazando el valor de align-items |

## CSS Grid

__CSS Grid layout__ contiene funciones de diseño dirigidas a los _desarrolladores de aplicaciones web_ y se puede utilizar para lograr muchos diseños diferentes. También se destaca por permitir __dividir una página en áreas o regiones principales__, por definir la relación en términos de tamaño, posición y capas entre partes de un control construido a partir de primitivas HTML.

### Propiedades contenedor Grid

| Propiedad | Descripcion  |
|--|--|
| __grid-template-columns__ | Propiedad que especifica el número y ancho de las columnas en un diseño de cuadrícula, en una lista separada por espacios |
| __grid-template-rows__ | Propiedad que especifica el número y las alturas de las filas en un diseño de cuadrícula, donde cada valor especifica la altura de las filas |
| __grid-template-areas__ | Propiedad que especifica áreas dentro del diseño de cuadrícula, donde cada área está definida por apóstrofes |
| __grid-gap / gap__ | Propiedad que especifica el distanciamiento entre las celdas (calles) indicando el valor para las filas y columnas respecticamente |

### Propiedades Item Grid

| Propiedad | Descripcion |
|--|--|
| __grid-column__ | Propiedad que especifica el tamaño y la ubicación de un elemento de la cuadrícula dentro de una columna, especificando el borde de inicio y fin en línea de su cuadrícula |
| __grid-row__ | Propiedad que especifica el tamaño y la ubicación de un elemento de la cuadrícula dentro de una fila, especificando el borde de inicio y fin en línea de su cuadrícula, por defecto es automatico |
| __grid-area__ | Propiedad que especifica el tamaño y la ubicación de un elemento, especificando así los bordes de las filas y columnas a la que pertenece o el repectivo nombre de su area |

## Position

Propiedad que especifica cómo un elemento es ubicado en el documento, se puede utilizar para modificar la posición donde aparecerá y las propiedades __top, right, bottom, y left__ determinan la ubicación final del mismo.

| Valor | Descripcion |
|--|--|
| __static__ | El elemento es posicionado de acuerdo al flujo normal del documento, ocupando su espacio predeterminado. Es el valor predeterminado |
| __relative__ | El elemento es posicionado de acuerdo al flujo del documento, es desplazado en relación a sí mismo. No afecta la posición de ningún otro elemento |
| __absolute__ | El elemento es removido del flujo normal del documento y es posicionado en relacion a su ancestro posicionado más cercano |
| __fixed__ | El elemento es removido del flujo normal del documento y es posicionado en relación al bloque contenedor inicial establecido por el viewport |
| __sticky__ | El elemento es posicionado de acuerdo al flujo del documento, luego es desplazado con relación a su ancestro que se desplace más cercano y su bloque contenedor |

## Selectores Especiales

### Combinadores

Símbolo que permite combinar dos o más selectores CSS, formando uno más complejo y potente. Se llaman así porqué proporciona una relación útil entre ellos y la ubicación del contenido en el documento.

| selector | descripcion | ejemplo | 
|--|--|--|
| __*__ | selecciona a todos los elementos | _div __*__ {...}_ |
| __>__ | elementos que sean hijos directos | _ul __>__ li {...}_ |
| __+__ | elemento que se encuentre al lado | _h1 __+__ p {...}_ |
| __~__ | elementos que sean hermanos  | _header __~__ p{...}_ |
| __[^]__ | atributos que empiecen con un valor | _a\[href **^=**"http"\]_ |
| __[*]__ | atributos que coincidan con un valor | _a\[href ***=**"www"\]_ |
| __[$]__ | atributos que terminen con un valor | _a\[href **$=**".com"\]_ |

### PseudoClases

Instancia o caracteristica de un elemento, ayudan a reducir el exceso de clases y proporcionan un marcado más flexible y fácil de mantener. Pueden interpretarse como el estado del mismo, actuando como si se hubiese aplicado una clase, ademas que poseen la misma jerarquia que estas.

| selector | Descripcion |
|--|--|
| __:hover__ | interviene si el usuario _pasa el cursor_ sobre un elemento |
| __:focus__ | interviene si el usuario _selecciona el elemento_ con los controles del teclado |
| __:link__ | __hipervinculo__ que aún no se ha visitado por el usuario |
| __:active__ | __hipervinculo__ o __boton__ cuando se presiona el boton primario del mouse |
| __:visited__ | __hipervinculo__ que ha sido visitado por el usuario |
| __:checked__ | __input__ de tipo _radio_ o _checkbox_ o etiqueta __option__ seleccionado |
| __:valid__ | _campo de formulario_ que cumple con sus atributos de validacion |
| __:invalid__ | _campo de formulario_ que no cumple con alguno de sus atributos de validacion |
| __:first-child__ | corresponde al _primer elemento_ entre un grupo de elementos hermanos |
| __:last-child__ | corresponde al _ultimo elemento_ entre un grupo de elementos hermanos |
| __:first-of-type__ | _primer elemento de su tipo_ entre un grupo de elementos hermanos |
| __:last-of-type__ | ultimo elemento de su t_ipo entre un grupo de elementos hermanos |
| __:nth-child(n)__ | uno o más elementos en función de su posición entre un grupo de hermanos |
| __:nth-last-child(n)__ | uno o más elementos en función de su posición, contando desde el final |

### PseudoElementos

Parte o elemento dentro de una etiqueta que, a diferencia de las pseudoclases, no describen un estado especial, sino que, permiten añadir estilos a una parte concreta del documento, como si se hubiese añadido un elemento HTML totalmente nuevo en el marcado.

| selector | Descripcion |
|--|--|
| __::before__ | permite agregar elementos antes del contenido de la etiqueta |
| __::after__ | permite agregar elementos despues del contenido de la etiqueta |
| __::first-line__ | corresponde a la primera línea de un elemento de bloque |
| __::first-letter__ | corresponde a la primera letra del contenido un elemento de bloque |
| __::placeholder__ | representa al _texto provisional_ en una etiqueta __input__ o __textarea__. |
| __::marker__ | corresponde a la _caja de marcadores_ de un __elemento de la lista__ |

## Transform 

Propiedad que permite manipular el sistema de coordenadas de un elemento usando las funciones de transformación y pueden aplicarse simultaneamente.

### Funciones Bidimensionales

Corresponden a cambios que podemos realizar sobre un elemento como transladar, mover, rotar o sesgar; sin afectar el flujo del documento y no dependen de ningun contexto. La propiedad __transform-origin__ permite modificar el _origen de las transformaciones_ de un elemento.

| Funcion | Descripcion | Ejemplo |
|--|--|--|
| __translate__ | Desplaza al elemento sobre los ejes X,Y. Si no se indica se asume que es 0 | __translate(_1rem,-.5rem_)__ |
| __scale__ | Escalado de un elemento, que puede especificarse para los ejes X,Y | __scale(_1.5_)__ |
| __rotate__ | Rotación de un elemento en sentido horario, expresada en grados | __rotate(_15deg_)__ |
| __skew__ | Sesga el elemento a lo largo de los ejes X,Y por los ángulos especificados | __skew(_15deg, 30deg_)__ |

### Funciones Tridimensionales

Para poder implementar este tipo de cambios debemos definir la propiedad de __perspective__ qué indica cuan lejos está el objeto del usuario y la propiedad de __perspective-origin__ la cual indica desde qué posición el usuario mira el elemento posicionado. Al definir estas propiedades, son los _elementos hijos_ los que obtienen la vista en perspectiva y por lo tanto a quienes podemos aplicar las funciones de transformacion.

| Funcion | Descripcion | Ejemplo |
|--|--|--|
| __translateZ__ | Mueve el elemento a través del eje Z en el espacio tridimensional | __translateZ(_5rem_)__ |
| __rotateX__ | Rotación de un elemento sobre el eje X para crear una perspectiva | __rotateX(_30deg_)__ |
| __rotateY__ | Rotación de un elemento sobre el eje Y para crear una perspectiva | __rotateY(_15deg_)__ |
| __perspective__ | Distancia entre el usuario y el plano tridimensional | __perspective(_2rem_)__ |

## Transition

Conjunto de propiedades que proporcionan una forma de controlar la velocidad de la animación al cambiar las propiedades entre dos estados de un elemento. Hay diferentes estados que pueden ser definidos utilizando pseudo-clases como _:hover_, _:active_, _:focus_, etc; o aplicado _dinámicamente usando JavaScript_ y en lugar de que los cambios de propiedad surtan efecto inmediatamente, puede hacer que los cambios se realicen durante un período de tiempo determinado.

| Propiedad | Descripcion |
|--|--|
| __transition-property__ | Nombres de las propiedades en las que debe aplicarse la transición |
| __transition-duration__ | Tiempo que debe tardar una animación de transición en completarse |
| __transition-timing-function__ | Establece cómo se calculan los valores intermedios de la transición. |
| __transition-delay__ | Tiempo de espera entre un cambio de atributo y el comienzo de la transicion |

## Animation

Conjunto de propiedades que permiten a un elemento cambiar gradualmente de un estilo a otro, se pueden cambiar tantas propiedades como sean necesarias, asi como tambien, la cantidad de veces que se requiera. Para utilizar la animación CSS, primero se deben especificar algunos fotogramas clave para la animación utilizando la regla __@keyframes__, indicando los estilos que tendrá el elemento en determinados momentos.

| Propiedad | Descripcion |
|--|--|
| __animation-name__ | Lista de animaciones que se deben aplicar al elemento seleccionado |
| __animation-duration__ | Tiempo que tarda la animación en completar un ciclo  |
| __animation-timing-function__ | Indica como debe avanzar sobre la duración de cada ciclo |
| __animation-delay__ | Tiempo de retardo que debe transcurrir antes de comenzar la animación |
| __animation-direction__ | Establece el sentido de reproduccion, de inicio a fin o viceversa |
| __animation-iteration-count__ | Cantidad de veces que un ciclo de animación debe ser ejecutado antes de detenerse |
| __animation-fill-mode__ | Manera en la que se aplican los estilos, estableciendo persistencia y estado final |
| __animation-play-state__ | Determina si una animación se encuentra en ejecución o pausada |

### Timing-function

Una timing function definida dentro de un keyframe afecta a ese keyframe. Si no está definida para el keyframe, se aplica la timing function para la animación en general. A menudo, es conveniente usar la propiedad abreviada animation para ajustar las propiedades de animación una sola vez.

| Valor | Descripcion |
|--|--|
| __ease__ | Animacion con inicio lento, luego rápido y finaliza lentamente |
| __linear__ | Especifica una animación con una _velocidad constante_ |
| __ease-in__ | Especifica una animación con un __inicio lento__ |
| __ease-out__ | Especifica una animación con un __final lento__ |
| __ease-in-out__ | Especifica una animación con un __inicio y un final lentos__ |
| __cúbic-bezier(x1,y1,x2,y2)__ | Permite definir valores de _progreso_ en funcion del _tiempo_ |

## SASS

SassScript es un Lenguaje de script inicialmente diseñado por Hampton Catlin y desarrollado por Natalie Weizenbaum, que proporciona los siguientes mecanismos: variables, nesting (anidamiento), mixins, y herencia de los selectores. La implementación oficial de Sass es open-source, escrita en Ruby y traducido a CSS. La misma consiste en dos sintaxis, la sintaxis indentada y los ficheros SCSS que tienen las extensiones .sass y .scss respectivamente.

### Variables

Son una _forma de almacenar información_, como colores, fuentes o cualquier valor CSS que creas que se necesite reutilizar reutilizar. Sass usa el __símbolo $__ para convertir cualquier elemento en una variable.

```scss
// Declaracion
$color: #eee;
$bg: #333;
// Implementacion
.dark{
    color: $color;
    background-color: $bg;
}
```

### Nesting

Cuando se escribe codigo HTML, se puede notar una jerarquía visual y anidada clara, mientras que esto no es asi para CSS. Por lo tanto, es una manera que permite que nuestra hoja de estilos siga la __misma jerarquía visual del HTML__, generando selectores especificos en el proceso.

```scss
// contenedor principal
nav{
    a{ 
        text-decoration: none;
        color: #eee;
    }
    ul{ 
        list-style: none;
        padding: 0;
    }
}
```

### Mixin

Funciones que permiten crear __grupos de declaraciones CSS__ que necesiten ser reutilizadas, incluso se les pueden pasar valores para hacer una mezcla más flexible; permitiendo que el codigo SASS se vea mucho mas limpio.

```scss
// Definicion (valores predeterminados)
@mixin box-sizing($m:0,$p:0,$b:0){
    margin: $m; 
    border: $b;
    padding: $p;
}
// Inclusion sin parametros
.reset{
    @include .box-sizing;
}
// Inclusion con parametros
.regular{
    @include box-sizing(.25rem, 1rem);
}
```

### Herencia

La __regla @extend__ permite _compartir un conjunto de propiedades CSS_ de un selector a otro, creando un selector compuesto, en lugar de copiar las propiedades de este a los elementos en los que se aplica. Se puede utilizar un selector con el __simbolo %__ para evitar la aparicion de este en el codigo resultante.

```scss
// selector base
%message{
    border-radius: .5rem;
    padding: 1rem;
    color: #333c;
}
// extension de selector
.error{
    @extend %message;
    background-color: #c335;
}
.warning{
    @extend %message;
    background-color: #da35;
}
.success{
    @extend %message;
    background-color: #3c65;
}
```

### Loops

La __regla @for__ cuenta desde un número a otro y _evalúa un bloque para cada número intermedio_. Cada número a lo largo del camino se asigna al nombre de la variable. Si se utiliza __to__, _se excluye_ el número final; si se utiliza __through__, _está incluido_.

```scss
$cols: 12;
// Condicion
@for $i from 1 through $cols{
    // Iteracion
    .col-#{$i}{
        width: percentage($i/$cols);
    }
}
```

La __regla @each__ facilita la emisión de estilos o la evaluación de código para cada elemento de una lista o cada par en un mapa. Es ideal para estilos repetitivos que sólo tienen algunas variaciones entre ellos.

```scss
// Lista de Valores (Array)
$colors: red, green, blue, cyan, magenta, yellow;
// Extraccion de valores
@each $value in $colors{
    .bg-#{$value}{
        background-color: $value;
    }
}
```