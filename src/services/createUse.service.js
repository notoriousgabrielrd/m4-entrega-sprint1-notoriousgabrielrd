import { v4 as uuidv4 } from "uuid"
import users from "../database"
import * as bycrypt from "bcryptjs"

const createUserService = async (email, name, password, isAdm) => {


    // transfoma a função em async aqui e em controller
    const hashedPassword = await bycrypt.hash(password, 10)

    const newUser = {
        email,
        name,
        password: hashedPassword,
        isAdm,
        id: uuidv4(),
        createdOn: Date(),
        updatedOn: Date(),
    }

    const { id, updatedOn, createdOn } = newUser

    const returnedUser = { name, email, id, isAdm, updatedOn, createdOn }

    users.push(newUser)



    return returnedUser

}


export default createUserService

// começo a criar os services para voltar ir aos controllers e chamá-los