import mongoose from "mongoose";
const msgSchema = mongoose.Schema({
    user: String,
    message: String,
    datetime:{
        type: Date,
        default: new Date()
    },
    type:{
        type: String,
        default: "public"
    },
    to:{
        type: String,
        default: "all"
    },
})
export const Message = mongoose.model('messages', msgSchema)