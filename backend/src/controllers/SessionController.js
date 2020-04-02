// Login - Criação de uma sessão

const connection = require('../database/connection')  //conexão com o banco

module.exports = {
  // Login - criar uma sessão
  async create (req, res) {
    const { user_name, password } = req.body  // usuário e senha do usuário que vai fazer o login

    const user = await connection('users')
      .where('user_name', user_name).andWhere('password', password)
      .select(
        'user_name',
        'password'
      )
      .first()  // como a busca é por usuário e senha, será retornado um único usuário

    // Caso o usuário não exista
    if (!user) {
      return res.status(400).json({ error: 'Nenhum usuário encontrado com esse nome e senha' })  // status 400: bad request (há algum erro)
    }

    // Caso o usuário exista, retorna os dados dele
    return res.json(user)

  }
}
