import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom' /*Adição de link na página*/

import api from '../../services/api'

import './styles.css'

export default function CadastroUsuario () {

  // Criação de estados para cada um dos inputs
  const [user_name, setUser_name] = useState('')  //Nome de usuário: input de texto -> inicia com valor vazio ''
  const [email, setEmail] = useState('')          //E-mail
  const [phone, setPhone] = useState('')          //Telefone
  const [password, setPassword] = useState('')    //Senha

  const history = useHistory()

  // Responsável pelo cadastro do usuário - disparada quando o form der 'submit'
  async function cadastroUsuario (e) {
    e.preventDefault()  //vai previnir o comportamento padrão do form (recarregar página toda)

    const data = {
      user_name,
      email,
      phone,
      password
    }

    try {
      await api.post('users', data)  //response

      history.push('/')  //envia o usuário para a página de Login

    } catch (error) {
      alert('Erro no cadastro, tente novamente')
    }
  }

  /*******************************************************************************************************************************/

  return (
    <div className="cadastro-usuario-container">
      <section className="form">
        <form onSubmit={cadastroUsuario}>
          <h1>Cadastro de Usuário</h1>

          <div id="user-name">
            <input
              type="text"
              name="user-name-input"
              id="user-name-input"
              placeholder="Nome de usuário"
              required={true}
              value={user_name}
              onChange={e => setUser_name(e.target.value)}
            />
          </div>

          <div id="email">
            <input
              type="email"
              name="email-input"
              id="email-input"
              placeholder="E-mail"
              required={true}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div id="phone">
            <input
              type="text"
              name="phone-input"
              id="phone-input"
              placeholder="Telefone"
              required={true}
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div id="password">
            <input
              type="password"
              name="password-input"
              id="password-input"
              placeholder="Senha"
              required={true}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Cadastrar</button>

          <Link to={'/'}>
            Voltar para a home
          </Link>
        </form>
      </section>
    </div>
  )
}
