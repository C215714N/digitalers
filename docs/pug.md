# PUG

Es un __motor de plantillas__, anteriormente conocido como Jade, para NodeJS y otros entornos de JavaScript. Se utiliza para generar HTML de forma más concisa y legible que el HTML estándar.

## Sintaxis

Pug utiliza una __sintaxis basada en indentación__ que elimina la necesidad de las etiquetas de cierre. Esto hace que el código sea más _limpio y fácil de leer_.

```pug
html
  head
    title Mi Página Web
  body
    h1 Hola Mundo
    p Esto es un párrafo.
```

## Interpolación de Variables

Pug permite la interpolación de variables directamente en la plantilla utilizando `#{variable}`.

```pug
- var title = 'Mi Página Web'
html
  head
    title #{title}
  body
    h1 Hola Mundo
```

## Condicionales

Pug soporta estructuras condicionales similares a las de JavaScript con `if`, `else if`, y `else`.

```pug
- var isLoggedIn = true
html
  body
    if isLoggedIn
      p Bienvenido de nuevo.
    else
      p Por favor, inicia sesión.
```

## Bucles

Puedes utilizar bucles `for` para iterar sobre arrays o colecciones.

```pug
- var items = ['html', 'css', 'js']
html
  body
    ul
      each item in items
        li #{item}
```

## Inclusión de Plantillas

Pug permite incluir otras plantillas usando `include` y `extends` para reutilizar código y estructurar mejor las vistas.

**layout.pug** (plantilla base)

```pug
doctype html
html
  head
    title My Site
  body
    block content
```

**index.pug** (plantilla que extiende de `layout.pug`)

```pug
extends layout

block content
  h1 Welcome to my site
  p This is the home page.
```

## Herencia de Plantillas

Permite definir bloques en una plantilla base que pueden ser sobrescritos en plantillas hijas.

**base.pug** (plantilla base)

```pug
doctype html
html
  head
    title My Website
  body
    block header
    block content
    block footer
```

**home.pug** (plantilla que extiende de `base.pug`)

```pug
extends base

block header
  h1 My Homepage

block content
  p Welcome to my homepage!

block footer
  p Footer information here.
```

## Comentarios

Pug permite comentarios en dos formatos: comentarios para el navegador y comentarios en el código.

```pug
// Comentario en el código (no visible en el navegador)
html
  head
    title Mi Página
    // Comentario en el código
  body
    p Aquí va el contenido.
    // Comentario en el código
```

Para comentarios visibles en el HTML generado:

```pug
html
  head
    title Mi Página
  body
    p Aquí va el contenido.
    //- Este comentario no aparece en el HTML generado
    // Comentario en el HTML
    <!-- Comentario visible -->
```

## Atributos Dinámicos

Puedes asignar atributos a los elementos HTML usando objetos y expresiones.

```pug
- var className = 'highlight'
html
  body
    p(class=className) Este párrafo está resaltado.
```

## Mixins

Los mixins son funciones reutilizables que permiten crear componentes o fragmentos de plantillas que pueden ser llamados con diferentes parámetros.

```pug
mixin button(text, url)
  a.button(href=url) #{text}

html
  body
    +button('Click Me', 'http://example.com')
```

## Interpolación de HTML

Pug soporta la interpolación de HTML seguro mediante el uso de `!=` para evitar la codificación de caracteres.

```pug
- var userInput = '<script>alert("XSS")</script>'
html
  body
    p!= userInput
```

## Soporte para Bloques Inline y Globales

Puedes definir bloques inline y globales para mayor flexibilidad en la estructura de tu HTML.

```pug
html
  head
    title Mi Página
  body
    p Hola
    block inline
      p Esto es un bloque inline.
    block global
      p Este es un bloque global.
```

Estas características hacen de Pug un motor de plantillas poderoso y flexible, ideal para generar HTML de manera estructurada y mantenible en aplicaciones web.

[Volver](../readme.md)