## Data Access Object

El patrón DAO se utiliza para __abstraer y encapsular el acceso a los datos__, proporcionando una interfaz para realizar _operaciones de persistencia sin exponer los detalles de la implementación_.

### Implementacion

```javascript
const User = require('../models/User');
class UserDao {
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }
  async getUserById(userId) {
    return await User.findById(userId);
  }
  async updateUser(userId, updateData) {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  }
  async deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
  }
  async getAllUsers() {
    return await User.find();
  }
}
module.exports = new UserDao();
```

### Características

* __Objetivo Principal__: El DAO se encarga de la persistencia y recuperación de datos de una base de datos o de una fuente de datos. Proporciona una interfaz para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
* __Encapsulamiento__: Encapsula el acceso a la fuente de datos, separando la lógica de persistencia de la lógica de negocio.
* __Flexibilidad__: Permite cambiar la implementación de la persistencia de datos (por ejemplo, de una base de datos SQL a NoSQL) sin afectar a otras partes de la aplicación.

### Ventajas

* __Modularidad__: Facilita la modularización de la lógica de acceso a datos, haciendo que el código sea más fácil de mantener y actualizar.
* __Facilidad de Pruebas__: Hacer pruebas unitarias de la lógica de negocio es más sencillo cuando se usa un DAO, ya que puedes simular la capa de datos.
* __Separación de Responsabilidades__: Mantiene separadas las responsabilidades de la lógica de negocio y el acceso a datos, promoviendo un diseño más limpio y organizado.

[Volver](../readme.md)