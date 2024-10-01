## Model-View-Controller

Es un patrón de diseño ampliamente utilizado en el desarrollo de aplicaciones, especialmente en aplicaciones web. Su objetivo es separar la lógica de la aplicación en tres componentes principales:

- **Modelo**: Representa los datos y la lógica de negocio de la aplicación. El modelo gestiona la estructura de los datos, las reglas de negocio y las interacciones con la base de datos.
    ```js
    const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    });
    const User = mongoose.model('User', userSchema);
    module.exports = User;
    ```
- **Vista**: Es la capa de presentación que muestra los datos al usuario. La vista se encarga de la interfaz gráfica y de la presentación de la información que proviene del modelo.
    ```hbs
    <!DOCTYPE html>
    <html lang="en">
    {{>head}}
    <body>
        <h1>Users List</h1>
        <ul>
        {{#each users}}
            <li><a href="/users/{{this.id}}">{{this.name}}</a></li>
        {{/each}}
        </ul>
        <form action="/users" method="post">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <button type="submit">Add User</button>
        </form>
    </body>
    </html>
    ```
- **Controlador**: Maneja las solicitudes del usuario, interactúa con el modelo y actualiza la vista según sea necesario. El controlador actúa como intermediario entre el modelo y la vista.
    ```js
    const User = require('./userModel');

    exports.getAllUsers = (req, res) => {
        User.find()
        .then(data => res.render('users', data))
        .catch(err => res.render('error', err))
    }
    exports.createUser = async (req, res) => {
        const user = new User(req.body);
        user.save()
        .then(() => res.render('users', user))
        .catch(err => res.render('error', err))
    }
    ```

### Ventajas

* Facilita la separación de preocupaciones.
* Permite una mayor flexibilidad y escalabilidad.
* Promueve la reutilización del código y la modularidad.

### Desventajas
    
* Puede ser más complejo de implementar en aplicaciones pequeñas.
* La interacción entre los componentes puede volverse complicada en aplicaciones grandes.
