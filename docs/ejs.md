# EJS
__Embedded JavaScript__ es un motor de plantillas que se utiliza para _generar HTML con JavaScript en el servidor_. Es una herramienta popular en aplicaciones Node.js debido a su _simplicidad y flexibilidad_.

## Incrustación

Permite agregar _código JavaScript directamente dentro de las plantillas_. Esto es útil para realizar __lógica o cálculos dinámicos__.

```ejs
<h1><%= title %></h1>
<p>La fecha actual es: <%= new Date().toLocaleDateString() %></p>
```

## Control de Flujo

Permite el uso de estructuras de control como `if`, `for`, y `while` para generar contenido dinámico basado en condiciones o iteraciones.

```ejs
<% if (user) { %>
  <p>Hola, <%= user.name %>!</p>
<% } else { %>
  <p>Hola, invitado!</p>
<% } %>
```
Aquí se usa una declaración `if` para mostrar un saludo diferente dependiendo de si existe un objeto `user`.

## Inclusión de Archivos

Permite utilizar otras plantillas EJS dentro de una plantilla principal, para __modularizar y reutilizar__ el código.

```ejs
<% include header.ejs %>
<h1><%= title %></h1>
<p><%= content %></p>
<% include footer.ejs %>
```
En este caso, `header.ejs` y `footer.ejs` son plantillas que se incluyen en la plantilla principal.

## Variables y Objetos

Se pueden pasar variables y objetos _desde el servidor a las plantillas_ para que puedan ser utilizados en la generación de HTML.

```ejs
<ul>
  <% items.forEach((item) => { %>
    <li><%= item %></li>
  <% }) %>
</ul>
```

## Comentarios

Los comentarios en EJS se pueden escribir de dos formas: comentarios en el HTML o comentarios en el código EJS, que  no se renderizan en el HTML resultante; mientras que los anteriores se incluyen en el HTML generado.

```ejs
<!-- Este es un comentario HTML -->
<% // Este es un comentario EJS %>
```

## Escapado Automático

EJS escapa automáticamente el contenido cuando se usa `<%= %>`, lo que evita inyecciones de código malicioso. Para evitar el escape, puedes usar `<%- %>`.

```ejs
<p>Texto seguro: <%= userInput %></p>
<p>Texto sin escape: <%- userInput %></p>
```
En el primer caso, el contenido es escapado, mientras que en el segundo caso, no se realiza el escape y el contenido puede incluir HTML.

## Plantillas Dinámicas

Permite crear plantillas dinámicas que se pueden modificar en tiempo de ejecución según los datos proporcionados.

```ejs
<h2>Artículos en <%= category %></h2>
<ul>
  <% articles.forEach((article) => { %>
    <li><a href="<%= article.url %>"><%= article.title %></a></li>
  <% }) %>
</ul>
```

## Soporte para Funciones

Puedes definir y utilizar funciones dentro de las plantillas para realizar tareas más complejas. En el ejemplo se define una función `formatDate` para dar formato a la fecha y se utiliza para mostrar la fecha del evento.

```ejs
<% function formatDate(date) { %>
  <%= new Date(date).toLocaleDateString() %>
<% } %>

<p>Fecha del evento: <%= formatDate(eventDate) %></p>
```

## Herencia de Plantillas

Aunque EJS no tiene soporte nativo para herencia de plantillas como algunos otros motores, puedes simularla con inclusiones y diseño modular.

```ejs
<% include layout.ejs %>
```

EJS es un motor de plantillas flexible y fácil de usar que permite generar contenido HTML dinámico mediante el uso de JavaScript. Esto lo convierte en una herramienta poderosa para desarrollar aplicaciones web en Node.js.

[Volver](../readme.md)