import mongoose from "mongoose";

export const dbConn = (URI) => 
    mongoose.connect(URI)
    .then(() => console.log("conectado con la base de datos"))
    .catch( err => console.log(err) )