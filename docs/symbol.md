## Symbols

Es un tipo de dato primitivo y único, que se utiliza para crear identificadores únicos que no colisionan con otras propiedades.Los símbolos se utilizan principalmente para crear identificadores únicos, lo que es útil cuando quieres evitar conflictos de nombres en propiedades de objetos, especialmente en entornos donde múltiples bibliotecas o módulos pueden trabajar juntos. También son usados internamente en el lenguaje para ciertos métodos clave que permiten modificar el comportamiento de objetos.

* __Evitar colisiones de propiedades__: Si dos bibliotecas diferentes usan la misma clave de propiedad, pueden sobrescribirse. Los símbolos garantizan que cada clave sea única.
* __Metaprogramación__: JavaScript tiene algunos símbolos especiales como Symbol.iterator, que permiten personalizar cómo los objetos se comportan en ciertos contextos. Por ejemplo, cómo un objeto debe ser recorrido con un bucle for...of.

```js
const miSimbolo = Symbol('descripcion');
const obj = {
  [miSimbolo]: 'Valor con símbolo',
  propiedadNormal: 'Valor normal'
};
console.log(obj[miSimbolo]); // 'Valor con símbolo'
console.log(obj.propiedadNormal); // 'Valor normal'

const otroSimbolo = Symbol('descripcion');
console.log(miSimbolo === otroSimbolo); // false
```

Usar símbolos evita que otros objetos en el sistema sobrescriban o accedan fácilmente a los roles de los usuarios.

```js
 Sistema de permisos con Symbol
const permisos = {
  ADMIN: Symbol('admin'),
  EDITOR: Symbol('editor'),
  VISITANTE: Symbol('visitante')
};

const usuarios = [
  { nombre: 'Juan', rol: permisos.ADMIN },
  { nombre: 'Maria', rol: permisos.EDITOR },
  { nombre: 'Ana', rol: permisos.VISITANTE }
];

function verificarAcceso(usuario) {
  if (usuario.rol === permisos.ADMIN) {
    console.log(`${usuario.nombre} tiene acceso total`);
  } else if (usuario.rol === permisos.EDITOR) {
    console.log(`${usuario.nombre} puede editar contenidos`);
  } else {
    console.log(`${usuario.nombre} solo puede ver contenidos`);
  }
}

usuarios.forEach(verificarAcceso);
// Salida:
// Juan tiene acceso total
// Maria puede editar contenidos
// Ana solo puede ver contenidos
```

[volver](../readme.md)