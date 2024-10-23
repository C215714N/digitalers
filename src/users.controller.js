import { User } from "./users.model.js";

export const createUser = (data, res) => {
    const title = "Crear Cuenta"
    const newUser = new User(data);
    newUser.save()
    .then(() => res.emit('success', {
        title, message: "el usuario fue creado exitosamente"
    }))
    .catch(err => res.emit('error', {
        title, message: "No se pudo crear la cuenta, revise sus datos",
        ...err
    }))
}
export const findUser = (query={}, res) => {
    User.find(query)
    .then((data) => res.emit('users', data))
    .catch(err => res.emit('error', {
        ...err,
        title: "Buscar usuarios",
        message: "No se pudo realizar la accion"
    }))
}
export const updateUser = ({filter, data}, res) => {
    const title = "Actualizar Datos";
    User.updateOne(filter, { $set: data })
    .then(() => res.emit('success', {
        title, message: "Los datos se actualizaron con exito"
    }))
    .catch(err => res.emit('error', {
        title, message: "No se pudieron guardar los cambios"
    }))
}
export const deleteUser = (filter = null, res) => {
    const title = "Eliminar Usuario"
    User.deleteOne(filter)
    .then(() => res.emit('success', {
        title, message: "su cuenta ha sido eliminada"
    }))
    .catch(err => res.emit('error', {
        title, message: "No se pudo realizar la accion"
    }))
}