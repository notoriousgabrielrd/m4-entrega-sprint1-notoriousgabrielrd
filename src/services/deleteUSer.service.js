import users from "../database";

const deleteUserService = (id) => {

    const userIndex = users.findIndex((element) => element.id === id)

    if (userIndex) {
        return "User not found!"
    }

    userIndex.splice(userIndex, 1)

    return "This user has been deleted!"

}

export default deleteUserService