import User from "../models/users.js"
import { users } from "../models/userModel.js"

export const createUser = (req, res) => {
    const newUser = new User({id: users.length,...req.body})
    users.push(newUser)
    res.json({
        message: "usuario agregado exitosamente",
        data: newUser
    })
}
export const getUsers = (req,res) => {
    res.json(req.params.id ? users.filter(usr => usr.id == req.params.id) : users)
}
export const updateUser = (req, res) => {
    users.forEach((usr,i) => {
        usr.id == req.params.id && (
        users[i] = {...usr, ...req.body}
    )})
    res.json({
        message: "usuario actualizado con exito",
        data: req.body
    })
}
export const deleteUser = (req,res) => {
    let deleted = idx = null;
    users.forEach((usr,i) => usr.id == req.params.id && (
        deleted = usr, idx = i
    ))
    if (idx){
    users.splice(idx, 1)
        res.json({
            message: "usuario eliminado",
            data: deleted
    })}
    else res.status(404).json({
        code: 404,
        message: "no se encontro al usuario "+ req.params.id,
    })
}