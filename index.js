import express from "express";
import { configDotenv } from "dotenv";
import user from "./src/user.router.js";
import chart from "./src/chart.router.js";
import { dbConn } from "./src/db.config.js";

configDotenv();
const { 
    PORT=3000, 
    URI = "https://localhost:27017"
} = process.env;
dbConn(URI)
const app = express();
app.use("/users", user);
app.use("/chart", chart);
app.listen(PORT, () => console.log("service running"));