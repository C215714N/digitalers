## Test-Driven Development

Es una __metodología de desarrollo de software__ en la que las pruebas se escriben antes del código funcional. La idea es comenzar por escribir una _prueba que defina una función o característica_ específica, y luego escribir el _código necesario para que esa prueba pase_. Este proceso __se repite en ciclos cortos__.

* __Escritura de pruebas__: Antes de producción, se escribe una prueba que especifica lo que debe hacer el código.
* __Ciclo corto__: El ciclo "Red-Green-Refactor", empieza con una prueba fallida que se modifica hasta pasar y luego se optimiza.
* __Pruebas unitarias__: Verificaciones individuales que se enfocan en pequeñas unidades de funcionalidad.
* __Incremento continuo__: Se busca agregar funcionalidad en pequeños incrementos, asegurando que cada cambio se verifique a través de pruebas.
* __Refactorización__: Después de hacer que una prueba pase, el código se limpia y mejora.

### Implementacion

- **dependencias**
    ```sh
    npm install --save-dev mocha chai
    ```
- **pruebas unitarias**
    ```js
    const chai = require('chai');
    const expect = chai.expect;
    const sum = require('../sum');

    describe('sum', () => {
        it('should return the sum of two numbers', () => {
            const result = sum(1, 2);
            expect(result).to.equal(3);
        });
        it('should return the sum of negative and positive numbers', () => {
            const result = sum(-1, 1);
            expect(result).to.equal(0)
        });
    });
    ```
- **implementacion de codigo**
    ```js
    const sum = (a,b) => a + b;
    module.exports = sum;
    ```
- **ejecucion**
    ```sh
    npx mocha
    ```
    
[Volver](../readme.md)