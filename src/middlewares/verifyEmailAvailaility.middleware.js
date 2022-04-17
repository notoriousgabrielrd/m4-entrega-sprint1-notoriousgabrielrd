/*
 recebe um request e response e um next
*/

import users from "../database";
const verifyEmailAvaialabilityMiddleware = (request, response, next) => {

    const { email } = request.body

    const userAlreadyExist = users.find((element) => element.email === email)

    if (userAlreadyExist) { return response.status(400).json({ status: "error", message: "This email addres is being already used!" }) }

    // o next manda para a próxima callback da route
    next()

}

export default verifyEmailAvaialabilityMiddleware