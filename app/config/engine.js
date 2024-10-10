import { engine } from "express-handlebars"
const path = process.cwd() + "/views/"
export const engineConfig = engine({
    partialsDir: path + "partials",
    layoutsDir: path + "layouts",
    defaultLayout: path + "layouts/index.hbs",
    extname: "hbs"
})