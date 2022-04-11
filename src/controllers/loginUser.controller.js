import loginUserService from "../services/loginUser.service";


const loginUserController = (request, response) => {

    const { email, password } = request.body

    const userLogin = loginUserService(email, password)

    return response.json(userLogin)
}

export default loginUserController