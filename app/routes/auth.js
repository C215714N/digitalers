import * as auth from '../controllers/users.js';
import { Router } from "express";
import { appConfig } from '../config/application.js'
import { hashPassword } from '../middleware/auth.js';

const authRouter = Router();
authRouter.get("/", (req, res) => res.render('./layouts/home', appConfig))
authRouter.get("/signin", (req, res) => res.render('./layouts/signin', appConfig))
authRouter.get("/login", (req, res) => res.render('./layouts/login', appConfig))

authRouter.post('/login', auth.getUsers)
authRouter.post('/signin', hashPassword, auth.createUser)

export default authRouter;