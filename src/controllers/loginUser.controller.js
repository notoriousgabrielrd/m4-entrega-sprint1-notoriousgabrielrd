import loginUserService from "../services/loginUser.service";


const loginUserController = (request, response) => {

    const { email, password } = request.body
    try {
        const userLogin = loginUserService(email, password)

        return response.json({ tokenJWT: userLogin })
    } catch (err) {
        return response.status(400).json({
            status: "error",
            message: err.message
        })
    }

}

export default loginUserController