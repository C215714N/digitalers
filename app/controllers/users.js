import UserDao from "../DAO/user.js"
import { User } from "../models/user.js"
export const createUser = ({body}, res) => {
    const userData = new UserDao(body);
    const newUser = new User(userData);
    newUser.save()
    .then(result => res.render('signin', {
        status: res.status,
        message: "usuario creado exitosamente",
        data: newUser 
    }))
    .catch(err => res.render('signin', err))
}
export const getUsers = ({params:{id:_id}},res) => {
    const query = _id ? {_id} : {}
    User.find(query).sort({_id: -1})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}
export const updateUser = ({params:{id:_id}, body}, res) => {
    const userData = new UserDao(body)
    User.updateOne({_id},{ $set: userData})
    .then(({modifiedCount}) => res.json({
        status: modifiedCount ? 200 : 404,
        message: modifiedCount ? 
            "usuario actualizado exitosamente" :
            "no se encontro el usuario " + _id,
        data: userData,
    }))
    .catch(err => res.json(err))
}
export const deleteUser = (req, res) => {
    const {id:_id} = req.params;
    User.deleteOne({_id})
    .then(({deletedCount}) => res.json({
        status: deletedCount ? 200 : 404,
        message: deletedCount ? 
            "usuario eliminado exitosamente" : 
            "no se encontro el usuario " + _id
    }))
    .catch(err => res.json(err))
}