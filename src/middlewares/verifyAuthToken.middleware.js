import jwt from "jsonwebtoken"

const verifyAuthTokenMiddleware = (request, response, next) => {

    let token = request.headers.authorization

    const treatedToken = token.split(" ")

    if (treatedToken.length < 2) { return response.status(401).json({ status: "error", message: "Missing authorization token!" }) }

    // fazemos isso para tratar nosso token do tipo Bearer ...token

    jwt.verify(treatedToken[1], "SECRET_KEY", (error, decoded) => {
        if (error) {
            return response.status(401).json({ status: "error", message: "Invalid token!" })
        }


        request.hack = { id: decoded.id, isAdm: decoded.isAdm }

        next()
    })

}

export default verifyAuthTokenMiddleware