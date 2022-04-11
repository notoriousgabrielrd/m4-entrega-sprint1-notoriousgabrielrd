import listUserService from "../services/lisUser.service";

const listUserController = (request, response) => {

    const user = listUserService()

    return response.json(user)
}

export default listUserController