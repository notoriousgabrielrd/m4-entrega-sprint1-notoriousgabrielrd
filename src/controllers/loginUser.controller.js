import loginUserService from "../services/loginUser.service";


const loginUserController = (request, response) => {

    const { email, password } = request.body
    try {
        const userLogin = loginUserService(email, password)

        return response.json({
            status: "You're logged!",
            tokenJWT: userLogin
        })
    } catch (err) {
        return response.status(401).json({
            status: "error",
            message: err.message
        })
    }

}

export default loginUserController