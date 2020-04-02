const connection = require('../database/connection')  //conexão com o banco de dados

module.exports = {
  // Criar / cadastrar cliente
  async create (request, response) {

    const { name, cpf, address, phone } = request.body

    // Inserir cliente
    await connection('clients').insert({
      name,
      cpf,
      address,
      phone
    })

    return response.json({ name, cpf, address, phone })
  },

  /*******************************************************************************************************************************/

  // Listar / consultar clientes
  async index (request, response) {
    const clients = await connection('clients').select('*')

    return response.json(clients)
  }
}
