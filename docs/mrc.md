## Model-Route-Controller

variante del patrón MVC, en la que se omite la Vista y se enfoca en la Ruta como un componente separado. En este patrón, la Ruta actúa como __intermediario para manejar las solicitudes HTTP__ y dirigirlas a los controladores adecuados. Es particularmente útil en aplicaciones web donde las rutas y controladores necesitan una clara _separación de responsabilidades_.

* __Modelo:__ Representa la estructura de los datos y la lógica de negocio. Define cómo se almacenan, validan y manipulan los datos, mediante la implementacion de metodos CRUD (creación, lectura, actualización y eliminación).

    ```js
    class Task {
        constructor(id, title, completed = false) {
            this.id = id;
            this.title = title;
            this.completed = completed;
        }
    }
    module.exports = Task;
    ```
* __Ruta:__ Define cómo las solicitudes HTTP se mapean a los métodos del controlador. Actúa como intermediario entre el cliente y el controlador. Define las rutas o endpoints de la API.

    ```js
    const taskController = require('../controllers/taskController');
    const express = require('express');
    const router = express.Router();

    router.get('/tasks', taskController.getAllTasks);
    router.get('/tasks/:id', taskController.getTaskById);
    router.post('/tasks', taskController.addTask);

    module.exports = router;
    ```
* __Controlador:__ Procesa las solicitudes del cliente, interactúa con el modelo para obtener o manipular datos, y devuelve una respuesta adecuada. Maneja la lógica de la aplicación y las operaciones específicas del negocio.
    ```js
    const Task = require('../models/taskModel');

    exports.getAllTasks = (req, res) => res.json(tasks)
    exports.getTaskById = (req, res) => {
        const task = tasks.find(task => task.id == req.params.id);
        task ? res.json(task) : 
        res.status(404).json({ message: 'Task not found' })
    };
    exports.addTask = (req, res) => {
        const newTask = new Task(req.body);
        tasks.push(newTask);
        res.status(201).json(newTask);
    };
    ```

| Caracteristica | Descripcion |
|-|-|
| __Intermediación Clara__ | La Ruta recibe solicitudes HTTP y las dirige al controlador correspondiente. Esto permite una clara separación entre la definición de las rutas y la lógica de manejo de esas solicitudes |
| __Desacoplamiento__ | La separacion facilita el mantenimiento y la evolución. Puedes modificar la lógica del controlador o la estructura del modelo sin afectar directamente a las rutas, y viceversa |
| __Modularidad__ | Al separar la lógica en componentes distintos, fomenta una estructura modular. Esto facilita la reutilización y prueba de los componentes, y mejora la claridad del código |
| __Flexibilidad__ | Es útil en el desarrollo de APIs RESTful o aplicaciones basadas en servicios web, donde la vista no es relevante para la lógica de backend y el enfoque está en manejar datos y rutas |
| __Enrutamiento Simple__ | La gestión del enrutamiento se concentra en el archivo de rutas, mientras que la lógica de negocio y manipulación de datos se maneja en los controladores y modelos |