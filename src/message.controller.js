import { Message } from "./message.model.js";

export const createMessage = (data, res) => {
    const newMsg = new Message(data)
    newMsg.save()
    .then(() => res.emit("message", data))
    .catch(err => res.emit("error", err))
}
export const loadMessage = (filter = {}, res) => {
    Message.find(filter).limit(100)
    .then((data) => data.length && res.emit("chat", data))
    .catch(err => res.emit("error", err))
}