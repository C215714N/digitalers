import { userModel } from "./user.model.js";
import { productsModel } from "./product.model.js";

export const getChart = async (req, res) => {
    try {
        const { id:_id } = req.params;
        const chart = await userModel.findOne({ _id },{ chart:1 })
        res.json(chart)
    } 
        catch (err) { res.json(err) }
}
export const addToChart = async (req, res) => {
    try {
        const { body:{id:user}, params:{id:item} } = req;
        const product = await productsModel.find({ _id:item }).toObject()
        if (!product) return res.json({ message: "Producto no encontrado" })
        const success = await userModel.updateOne(
            { _id:user },{ $push:{ chart: { ...product,...req.body } } } )
        if (success) res.json({ message: "Producto agregado" })
    } 
    catch (err) { res.json(err) }
};
export const updateChart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        const success = await userModel.updateOne(
            { _id: userId, "chart._id": productId },
            { $set: { "chart.$.quantity": quantity } } )
        if (success) res.json({ message: "Producto actualizado" })
    } 
    catch (err) { res.json(err) }
};
export const deleteFromChart = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const success = await userModel.updateOne(
            { _id: userId },
            { $pull: { chart: { _id: productId } } } )
        if (success) res.json({ message: "Producto eliminado" })
    } 
    catch (err) { res.json(err) }
};