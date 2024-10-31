import * as usr from "./chart.controller.js"
import { verify } from "./user.util.js"
import { Router } from "express"

const chart = Router()
chart.get("/:id", verify, usr.getChart)
chart.post("/", verify, usr.addToChart)
chart.put("/", verify, usr.updateChart)
chart.delete("/", verify, usr.deletefromChart)

export default chart