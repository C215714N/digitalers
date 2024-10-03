import { Schema, model } from "mongoose";
const userSchema = Schema({
    name: {
        type: String,
        minLength: 6,
        maxLength: 20,
        required: true,
    },
    email: {
        type: String,
        minLength: 8,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
})
export const User = model('user', userSchema)