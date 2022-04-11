import users from "../database";
import jwt from "jsonwebtoken"
import * as bycrypt from "bcryptjs"
import bcrypt from "bcryptjs/dist/bcrypt";
import { response } from "express";


const loginUserService = (email, password) => {
    // retorna um objeto do user
    const user = users.find((element) => element.email === email)

    if (!user) { return "Wrong email or password! " }

    const passwordMatch = bcrypt.compareSync(password, user.password)

    if (!passwordMatch) { return "Wrong email or password! " }
    // identificador único do user / chave de segredo/ tempo de expiração
    const token = jwt.sign({ email }, "SECRET_KEY", { expiresIn: "24h" })

    return token
}

export default loginUserService