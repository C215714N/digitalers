import { userModel } from "./user.model.js"

export const getUser = (req,res) => {
    userModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
export const createUser = (req,res) => {
    const newUser = new userModel(req.body)
    newUser.save()
    .then(data => res.json({ message: "Usuario creado" }))
    .catch(err => res.json(err))
}
export const deleteUser = (req,res) => {
    userModel.deleteOne({_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}