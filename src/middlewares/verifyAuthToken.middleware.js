import jwt from "jsonwebtoken"

const verifyAuthTokenMiddleware = (request, response, next) => {

    let token = request.headers.authorization.split(" ")[1]
    if (!token) { return response.status(401).json({ message: "Missing authorization token!" }) }

    // fazemos isso para tratar nosso token do tipo Bearer ...token

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
        if (error) {
            return response.status(401).json({ message: "Invalid token!" })
        }


        request.hack = { id: decoded.id, isAdm: decoded.isAdm }

        next()
    })

}

export default verifyAuthTokenMiddleware