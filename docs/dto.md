## Data Transfer Object

El patrón DTO se utiliza para __transferir datos entre diferentes capas de la aplicación__ o entre aplicaciones, minimizando la cantidad de datos transmitidos y proporcionando una _estructura clara para los datos_.

```javascript
class UserDto {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.age = user.age;
  }
}

module.exports = UserDto;
```
### Características:

* __Objetivo Principal__: transferir datos entre capas de una aplicación o entre aplicaciones. No contiene lógica de negocio o reglas de aplicación, solo datos.
* __Simplicidad__: Suelen ser objetos simples con campos públicos y sin métodos complejos. Su estructura se basa en los datos que necesitan ser transferidos.
* __Independencia__: Se diseñan de manera que sean independientes de la capa de persistencia o de la lógica de negocio, facilitando el cambio en estas capas sin afectar el DTO.
* __Reducción de Carga de Datos__: Pueden ser diseñados para incluir solo los datos necesarios para una operación específica, evitando la transferencia de información innecesaria.

### Ventajas

* __Desacoplamiento__: Ayuda a desacoplar la lógica de negocio de la capa de presentación o de otras capas de la aplicación.
* __Optimización de Datos__: Permite optimizar la cantidad de datos que se envían entre el cliente y el servidor, o entre diferentes componentes de una aplicación.
* __Facilita el Mantenimiento__: Cambios en la estructura de la base de datos o en la lógica de negocio no afectan a la capa de transferencia de datos si se actualizan adecuadamente los DTOs.

[Volver](../readme.md)