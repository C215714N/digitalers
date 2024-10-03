import UserDao from "../DAO/user.js"
import { User } from "../models/user.js"
export const createUser = ({body}, res) => {
    const userData = new UserDao(body);
    const newUser = new User(userData);
    newUser.save()
    .then(result => res.json({ ...result, data: newUser }))
    .catch(err => res.json(err))
}
export const getUsers = (req,res) => {
    User.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
}
export const updateUser = (req, res) => {
    const userData = new UserDao(req.body)
    User.updateOne({_id},{ $set: userData })
    .then(result => res.json(result))
    .catch(err => res.json(err))
}
export const deleteUser = ({params:id}, res) => {
    User.deleteOne({_id: ObjectId(id)})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}