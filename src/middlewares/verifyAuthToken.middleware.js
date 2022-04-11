import jwt from "jsonwebtoken"

const verifyAuthTokenMiddleware = (request, response, next) => {

    let token = request.headers.authorization

    if (!token) { return response.status(401).json({ message: "Missing authorization token!" }) }

    // fazemos isso para tratar nosso token do tipo Bearer ...token
    // token = token.split(" ")[1]

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
        if (error) {
            return response.status(401).json({ message: "Invalid token!" })
        }
        next()
    })

}

export default verifyAuthTokenMiddleware