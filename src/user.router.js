import * as usr from "./user.controller.js"
import { verify } from "./user.util.js"
import { Router } from "express"

const user = Router()
user.get("/:id", verify, usr.getUser)
user.post("/", verify, usr.createUser)
user.delete("/", verify, usr.deleteUser)
export default user