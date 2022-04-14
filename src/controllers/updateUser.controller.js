import users from "../database";
import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {

    const { id } = request.params
    const { name, email } = request.body
    console.log(request.body)
    console.log(name, email)

    const userIsAdm = users.find((value) => value.id === id)
    // console.log("isadm:", userIsAdm)

    const updatedUser = updateUserService({ id, email, name })


    return response.json(updatedUser)
}

export default updateUserController