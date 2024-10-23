import mongoose, { Schema } from "mongoose";
const userSchema = Schema({
    username: {
        type: String,
        minLength: 4,
        maxLength: 20,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        minLength: 8,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        minLength: 6,
        required: true,
        unique: true,
    }
})
export const User = mongoose.model('users', userSchema);