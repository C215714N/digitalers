# Handlebars 

Handlebars es un motor de plantillas de JavaScript que permite generar dinámicamente HTML en el lado del cliente o del servidor. Es muy popular debido a su simplicidad y flexibilidad. Aquí te presento una descripción de sus características principales junto con ejemplos para cada una:

## Sintaxis Básica
   
Handlebars utiliza una sintaxis basada en doble llave (`{{ }}`) para incrustar valores en las plantillas.

```handlebars
<h1>{{title}}</h1>
<p>{{description}}</p>
```

## Bloques de Ayuda
   
Puedes usar expresiones de ayuda para manipular datos. Las expresiones de ayuda son bloques que permiten realizar operaciones adicionales o iterar sobre colecciones.

- **Condicional:**
  ```handlebars
  {{#if isLoggedIn}}
    <p>Bienvenido, {{username}}!</p>
  {{else}}
    <p>Por favor, inicia sesión.</p>
  {{/if}}
  ```

- **Iteración:**
  ```handlebars
  <ul>
    {{#each items}}
      <li>{{this}}</li>
    {{/each}}
  </ul>
  ```

## Helpers Personalizados
   
Puedes definir tus propios helpers para realizar operaciones específicas.

```javascript
Handlebars.registerHelper('exclamar', function(text) {
  return text + '!';
});
```

## Partials
  
Los partials son fragmentos reutilizables de una plantilla. Son útiles para evitar la repetición de código.

- **Definición del partial:**
  ```handlebars
  {{!-- partials/user-profile.hbs --}}
  <div class="user-profile">
    <h2>{{name}}</h2>
    <p>{{bio}}</p>
  </div>
  ```

- **Uso del partial:**
  ```handlebars
  {{> user-profile name="Ana" bio="Desarrolladora web"}}
  ```

## Sub-Expresiones

Puedes usar sub-expresiones para pasar resultados de una expresión como argumentos a otra.
Donde `formatDate` es un helper que formatea la fecha según el formato proporcionado.

```handlebars
{{formatDate (date "YYYY-MM-DD")}}
```

## Contextos Anidados
   Handlebars permite acceder a contextos anidados usando notación de punto.

   ```handlebars
   <p>{{user.name}}</p>
   ```

## Métodos de Escape de HTML
   
Handlebars automáticamente escapa el HTML para evitar vulnerabilidades XSS, pero puedes usar triple llave (`{{{ }}}`) para renderizar HTML sin escape.

```handlebars
<p>{{{htmlContent}}}</p>
```
Si `htmlContent` es `"<strong>Texto en negrita</strong>"`, el resultado será:
```html
<p><strong>Texto en negrita</strong></p>
```

## Comentarios

Puedes añadir comentarios a tus plantillas que no se renderizarán en el HTML final.

```handlebars
{{!-- Este es un comentario en Handlebars --}}
```

## Compilación y Renderizado

Handlebars necesita compilar una plantilla antes de renderizarla. La compilación convierte la plantilla en una función que se puede invocar con datos.

```javascript
var source = "<p>Hello, {{name}}!</p>";
var template = Handlebars.compile(source);
var context = { name: "World" };
var html = template(context);
console.log(html);  // <p>Hello, World!</p>
```

Estas características hacen de Handlebars una herramienta poderosa para la generación dinámica de contenido en aplicaciones web.

[Volver](../readme.md)