import users from "../database";
import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {
    /* contém id && isAdm, vem do verifyAuthToken */
    const { hack } = request

    const { id } = request.params
    const { name, email } = request.body



    const updatedUser = updateUserService({ id, email, name, hack })

    const publicUser = {
        email: updatedUser.email,
        name: updatedUser.name,
        isAdm: updatedUser.isAdm,
        id: updatedUser.id,
        createdOn: updatedUser.createdOn,
        updatedOn: updatedUser.updatedOn
    }

    return response.json(publicUser)
}

export default updateUserController