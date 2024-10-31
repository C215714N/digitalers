import mongoose from "mongoose";

export const dbConn = (URI) => 
    mongoose.connect(URI)
    .then(() => console.log('database connected'))
    .catch((err) => console.log(err))