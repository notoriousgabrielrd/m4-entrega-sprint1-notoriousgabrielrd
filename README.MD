# O que arrumar:

- A rota users não deve retornar a senha do usuário e status(201) \*

- A rota login deve retornar, em caso de sucesso, um objeto com token, em caso de fracasso, um objeto message de error \*
- A rota get /users deve retornar, em caso de erro, user not ADM ou not token, uma mensagem com o erro respectivo e status(401) \*

- A rota /users/profile não deve receber o id do usuário \*

- a rota put deve ser refatorada com patch \*

- O delete não está funcionando? \*
