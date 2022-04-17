

const verifyUsersPatchMiddleware = (request, response, next) => {

    const { hack } = request

    const { id } = request.params

    console.log("hack:", hack)
    console.log("idparam:", id)

    if (hack.isAdm == false && hack.id != id) {

        return response.status(401).json({ message: "You have not permission!" })
    }


    return next()

}


export default verifyUsersPatchMiddleware