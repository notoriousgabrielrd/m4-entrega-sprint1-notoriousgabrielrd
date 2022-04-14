import listUserProfileService from "../services/listUserProfile.service";
import jwt from "jsonwebtoken"

const listUserProfileController = (request, response) => {
    let token = request.headers.authorization.split(" ")[1]

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {

        const id = decoded.id



        const user = listUserProfileService(id)

        return response.json(user)
    })

}

export default listUserProfileController