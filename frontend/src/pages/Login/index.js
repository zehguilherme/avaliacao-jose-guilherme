import React from 'react'
import { Link } from 'react-router-dom' /*Adição de link na página*/

import './styles.css'

import cadeadoImg from '../../assets/cadeado.svg'

export default function Login () {
  return (
    <div className="login-container">
      <section className="form">

        <div id="lock-image">
          <img src={cadeadoImg} alt="Login" />
        </div>

        <form action="">
          <h1>Realize o Login</h1>

          <input type="text" id="user" placeholder="Usuário" required={true} />
          <input type="password" name="password" id="password" placeholder="Senha" required={true} />

          <button type="submit">Entrar</button>

          <div className="no-registration">
            <Link to="/cadastro-usuario">
              Não possuo cadastro.
            </Link>
          </div>

        </form>
      </section>
    </div>

  )
}
