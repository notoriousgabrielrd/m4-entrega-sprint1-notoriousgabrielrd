import { Router } from "express"

import loginUserController from "../controllers/loginUser.controller"

const routerLogin = Router()

routerLogin.post("", loginUserController)

export default routerLogin