import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom' /*Adição de link na página*/

import api from '../../services/api'

import './styles.css'

import cadeadoImg from '../../assets/cadeado.svg'

export default function Login () {

  const [user_name, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  // Realiza o Login do usuário - disparada quando o form der 'submit'
  async function realizarLogin (e) {
    e.preventDefault()  //vai previnir o comportamento padrão do form (recarregar página toda)

    try {
      const response = await api.post('/sessions', { user_name, password })  //envia o usuario e senha do usuário que está querendo logar

      // Tratamento para campos vazios ao tentar realizar login - dispara o catch
      if (response.data.user_name === '' || response.data.password === '') {
        throw alert('Campo(s) vazio(s).')
      }

      // Salvar localmente no navegador
      localStorage.setItem('userName', user_name)
      localStorage.setItem('userPassword', response.data.password)

      // Enviar usuário para página de cadastro de clientes
      history.push('/cadastro-cliente')

      alert('Login realizado com sucesso')

    } catch (error) {
      alert('Falha no login, tente novamente.')
    }
  }

  /*******************************************************************************************************************************/

  return (
    <div className="login-container">
      <section className="form">

        <div id="lock-image">
          <img src={cadeadoImg} alt="Login" />
        </div>

        <form onSubmit={realizarLogin}>
          <h1>Realize o Login</h1>

          <input
            type="text"
            id="user"
            placeholder="Nome de usuário"
            value={user_name}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div id="bt">
            <button type="submit">Entrar</button>
          </div>

          <div className="no-registration">
            <Link to="/cadastro-usuario">
              Não possuo cadastro
            </Link>
          </div>

          <div className="consult-user">
            <Link to="/consulta-usuario">
              Consulta de usuários
            </Link>
          </div>

          <div className="consult-client">
            <Link to="/consulta-cliente">
              Consulta de clientes
            </Link>
          </div>

        </form>
      </section>
    </div>
  )
}
