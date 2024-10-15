import jwt from "jsonwebtoken";
import { appConfig } from "../config/application.js";
export const createToken = (req, res) => {
    const { id } = req.body
    const { SECRET } = process.env
    const token = jwt.sign({id}, SECRET, { expiresIn: "1h" })
    res.render('layouts/home', { 
        ...appConfig, token,
        title: `Bienvenido al sitio ${req.body.name}`,
        message: "Acceso concedido"
}) }
export const checkToken = (req, res, next) => {
    const { SECRET } = process.env
    const token = req.headers['Authorization'].split(" ")[1] ?? req.params.id
    jwt.verify(token, SECRET, (err, decoded) => {
        if (!err) { req.body.id = decoded; next() }
        else res.render('layouts/error',{
            err, ...appConfig,
            title: "Acceso denegado",
            message: "No tiene permisos para realizar esta accion"
        })
}) }