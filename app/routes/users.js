// Importaciones
import { Router } from "express";
import * as usr from "../controllers/users.js";
import { checkToken } from "../middleware/validate.js";
// Creacion del Enrutador
const usersRouter = Router()
// Definicion de Rutas
usersRouter.post('/', usr.createUser)      // CREATE
usersRouter.get('/:id?', usr.getUsers)     // READ
usersRouter.put('/:id', checkToken, usr.updateUser)    // UPDATE
usersRouter.delete('/:id', checkToken, usr.deleteUser) // DELETE
// Exportacion de Rutas
export default usersRouter