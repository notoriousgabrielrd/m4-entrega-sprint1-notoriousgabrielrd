import { Router } from "express"


import createUserController from "../controllers/createUser.controller"
import listUserController from "../controllers/listUser.controller"
import updateUserController from "../controllers/updateUser.controller"
import deleteUserController from "../controllers/deleteUser.controller"
// import loginUserController from "../controllers/loginUser.controller"

import verifyEmailAvaialabilityMiddleware from "../middlewares/verifyEmailAvailaility.middleware"
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware"
import verifyAdmAuth from "../middlewares/verifyAdmAuth.middleware"
import listUserProfileController from "../controllers/listUserProfileController"

const router = Router()

router.post("", verifyEmailAvaialabilityMiddleware, createUserController)
router.get("", verifyAdmAuth, listUserController)
router.get("/profile", verifyAuthTokenMiddleware, listUserProfileController)
router.put("/:id", verifyAuthTokenMiddleware, updateUserController)
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController)



export default router




/*

 3- import o router, crio uma const para ele e vou para os services

 4- após criar os services e controller voltamos para cá e chamamos os controllers

 5- Criamos o CRUD

 6- exportamos o router e voltamos ao nosso app
*/