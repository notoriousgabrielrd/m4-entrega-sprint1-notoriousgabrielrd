import users from "../database";

const verifyAdmAuth = (request, response, next) => {

    const { isAdm } = request.body

    if (!!isAdm) {
        return response.status(401).json({ message: "This user has not authorization to acess this route!" })
    }


    next()
}

export default verifyAdmAuth