import * as auth from '../controllers/users.js';
import * as get from '../controllers/auth.js'
import { Router } from "express";
import { createToken, hashPassword, verifyUser } from '../middleware/auth.js';

const authRouter = Router();
authRouter.get("/", get.home)
authRouter.get("/signin", get.signIn)
authRouter.get("/login", get.logIn)

authRouter.post('/login', verifyUser, createToken)
authRouter.post('/signin', hashPassword, auth.createUser)

export default authRouter;