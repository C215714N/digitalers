// Importaciones
import { Router } from "express";
import * as usr from "../controllers/users.js";
// Creacion del Enrutador
const usersRouter = Router()
// Definicion de Rutas
usersRouter.post('/', usr.createUser)      // CREATE
usersRouter.get('/:id?', usr.getUsers)     // READ
usersRouter.put('/:id', usr.updateUser)    // UPDATE
usersRouter.delete('/:id', usr.deleteUser) // DELETE
// Exportacion de Rutas
export default usersRouter