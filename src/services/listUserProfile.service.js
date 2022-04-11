import users from "../database";

const listUserProfileService = (id) => {

    const user = users.find((element) => { return element.id === id })
    return user

}

export default listUserProfileService