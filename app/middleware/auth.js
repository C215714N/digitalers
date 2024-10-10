import bcrypt from "bcrypt"
import { appConfig } from "../config/application.js"

export const hashPassword = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(pass => {
        req.body.password = pass
        next()
    })
    .catch(err => res.render('./layouts/error', appConfig))
}
export const hp = async (req, res, next) => {
    try{
        const hashPass = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPass
        next()
    }
    catch(err){
        res.json(err)
    }
}