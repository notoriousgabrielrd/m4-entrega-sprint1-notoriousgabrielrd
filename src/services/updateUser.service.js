import users from "../database";
import jwt from "jsonwebtoken"


const updateUserService = ({ id, email, name, hack }) => {


    // if (hack.isAdm == false && hack.id != id) {

    //     return "You have not permission!"
    // }




    const updatedUser = {
        id, name, email, updatedOn: Date()
    }

    const userIndex = users.findIndex((element) => element.id === id)

    if (userIndex === -1) {
        return "User not found!"
    }


    //  const returnedUser = { name, email, id, isAdm, updatedOn, createdOn }


    users[userIndex] = { ...users[userIndex], id: updatedUser.id, name: updatedUser.name, email: updatedUser.email, updatedOn: updatedUser.updatedOn }

    return users[userIndex]
}

export default updateUserService


// agora eu vou para os controllers


/*
fazer condição:
se o id for != do usuario logado
*/