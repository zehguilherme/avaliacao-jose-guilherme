const connection = require('../database/connection')  //conexão com o banco de dados

module.exports = {
  // Criar / cadastrar usuário
  async create (request, response) {

    const { user_name, email, phone, password } = request.body

    // Inserir usuário
    await connection('users').insert({
      user_name,
      email,
      phone,
      password
    })

    return response.json({ user_name, password })
  }

  /*******************************************************************************************************************************/

  // Listar / consultar usuários
  // async index (request, response) {

  //   return response.json()
  // }
}
