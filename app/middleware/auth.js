import bcrypt from "bcrypt"
import { User } from "../models/user.js"
import { appConfig } from "../config/application.js"

export const hashPassword = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(pass => { req.body.password = pass; next() })
    .catch(err => res.render('./layouts/error', {...appConfig, err}))
}
export const verifyUser = (req, res, next) => {
    const { name, password } = req.body
    User.find({$or: [ {name},{email: name}]})
    .then((data) => bcrypt.compare(password, data[0].password, (err, result) => {
        if (result) { req.body.id = data[0]._id; next() }
    }))
    .catch(err => res.render('layouts/login', {
        err, ...appConfig, 
        title:"No se han podido validar las credenciales", 
        message:"Revise que todos los datos sean correctos"
    }))
}
