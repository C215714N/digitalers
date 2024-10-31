import mongoose from "mongoose"
const Wallet = {
    type: Array,
    items: {
        uuid: String,
        name: String,
        code: Number,
    }
}
const Chart = {
    type: Array,
    items: {
        _id: String,
        name: String,
        stock: Number,
        price: Number
    }
}
export const userModel = mongoose.model('users', mongoose.Schema({
    username: String,
    email: String,
    wallet: Wallet,
    chart: Chart
}))