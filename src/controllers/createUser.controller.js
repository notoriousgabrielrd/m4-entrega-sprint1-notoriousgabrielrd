//  import a função equivalente ao meu controller

import createUserService from "../services/createUse.service";


const createUserController = async (request, response) => {
    const { email, name, password, isAdm } = request.body

    const user = await createUserService(email, name, password, isAdm)

    return response.status(201).json(user)

}

export default createUserController


// O controller recebe a requisição, chama o service que executa a lógica
// armazena tudo na variavel "user"
// e por fim retorna em forma de json
