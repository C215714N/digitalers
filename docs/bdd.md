## Behavior-Driven Development 

Es una __metodología de desarrollo de software__ que amplía TDD al enfocarse en el __comportamiento del sistema desde el punto de vista del usuario__. En lugar de centrarse en pruebas unitarias técnicas, se enfoca en _especificaciones en un lenguaje más natural y legible_, que puede ser entendido por todos los miembros del equipo, incluidos los no técnicos.

* __Comprensible__: Utiliza un lenguaje de dominio específico (DSL) legible para todas las partes interesadas, como _"Given-When-Then"_.
* __Enfoque__: Se centra en especificar el comportamiento del sistema en lugar de detalles de implementación.
* __Colaboración__: Promueve la colaboración para asegurar que todos tengan una comprensión común de los requisitos.
* __Especificaciones como pruebas__: Las especificaciones escritas se utilizan para generar pruebas automatizadas.
* __Ciclo de vida de desarrollo__: Sigue un ciclo iterativo centrado en los comportamientos del usuario.

### Implementacion 

- **dependencias**
    ```
    npm install --save-dev @cucumber/cucumber
    ```
- **funcion sumar**
    ```js
    const sum = (a,b) => a + b;
    module.exports = sum;
    ```
- **especificaciones**
    ```gherkin
    Feature: Sum

    Scenario: Adding two numbers
        Given I have the numbers 1 and 2
        When I add them
        Then the result should be 3

    Scenario: Adding a negative and a positive number
        Given I have the numbers -1 and 1
        When I add them
        Then the result should be 0
    ```
- **pruebas especificas**
    ```js
    const { Given, When, Then } = require('@cucumber/cucumber');
    const assert = require('assert');
    const sum = require('../sum');
    
    let result, a, b;
    Given('I have the numbers {int} and {int}', (num1, num2) => { a = num1;  b = num2; });
    When('I add them', () => { result = sum(a, b) });
    Then('the result should be {int}', (expectedResult) => { assert.strictEqual(result, expectedResult) });
    ```
- **ejecucion**
    ```
    npx cucumber-js
    ```
    
[Volver](../readme.md)