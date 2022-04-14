import users from "../database";
import jwt from "jsonwebtoken"

const verifyAdmAuth = (request, response, next) => {

    let token = request.headers.authorization.split(" ")[1]


    jwt.verify(token, "SECRET_KEY", (err, decoded) => {

        const isAdm = decoded.isAdm

        if (err) { return response.status(401).json({ message: "Missing authorization token!" }) }
        if (isAdm === false) {
            return response.status(401).json({
                status: "error",
                message: "Is not adm"
            })
        }


        return next()

    })



    // if (!!isAdm || !!token) {
    //     return response.status(401).json({ message: "This user has not authorization to acess this route!" })
    // }
    // console.log(!token)
    // if (isAdm == false) { return response.status(401).json({ message: "This user has not authorization to acess this route!" }) }


}

export default verifyAdmAuth