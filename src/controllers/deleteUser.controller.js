import deleteUserService from "../services/deleteUSer.service";

const deleteUserController = (request, response) => {

    const { id } = request.params

    const deletedUser = deleteUserService()

    return response.status(200).json({
        message: deletedUser
    })
}


export default deleteUserController


// Com os controllers criados vamos para os routes