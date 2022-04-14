import users from "../database";

const updateUserService = ({ id, email, name }) => {

    const updatedUser = {
        id, name, email, updatedOn: Date()
    }
    console.log("pudateduser:", updatedUser)
    const userIndex = users.findIndex((element) => element.id === id)

    if (userIndex === -1) {
        return "User not found!"
    }

    users[userIndex] = { ...users[userIndex], id: updatedUser.id, name: updatedUser.name, email: updatedUser.email, updatedOn: updatedUser.updatedOn }

    return users[userIndex]
}

export default updateUserService


// agora eu vou para os controllers