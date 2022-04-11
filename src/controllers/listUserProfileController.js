import listUserProfileService from "../services/listUserProfile.service";

const listUserProfileController = (request, response) => {

    const { id } = request.params
    console.log("id:", id)
    const user = listUserProfileService(id)

    return response.json(user)

}

export default listUserProfileController