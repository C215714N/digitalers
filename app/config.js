import mongoose from "mongoose";

const dbConn = (url) => 
    mongoose.connect(url)
    .then((res) => console.log('connected to database server'))
    .catch(err => console.error(err))

export default dbConn;