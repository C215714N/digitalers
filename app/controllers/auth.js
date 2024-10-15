import { appConfig } from "../config/application.js"

export const home = (_,res) => {
    res.render('layouts/home', appConfig)
}
export const signIn = (_,res) => {
    res.render('layouts/signin', appConfig)
}
export const logIn = (_,res) => {
    res.render('layouts/login', appConfig)
}