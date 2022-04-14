import users from "../database";
import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {

    const { hack } = request

    const { id } = request.params
    const { name, email } = request.body



    const updatedUser = updateUserService({ id, email, name, hack })


    return response.json(updatedUser)
}

export default updateUserController