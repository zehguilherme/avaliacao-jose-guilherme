import React from 'react'

import './styles.css'

export default function CadastroUsuario () {
  return (
    <div className="cadastro-container">
      <section className="form">
        <form action="">
          <h1>Cadastro de Usuário</h1>

          <div id="user_name">
            <label htmlFor="">Nome de usuário</label>
            <input type="text" name="user-name-input" id="user-name-input" required={true} />
          </div>

          <div id="cpf">
            <label htmlFor="">E-mail</label>
            <input type="text" name="cpf-input" id="cpf-input" required={true} />
          </div>

          <div id="phone">
            <label htmlFor="">Telefone</label>
            <input type="text" name="phone-input" id="phone-input" required={true} />
          </div>

          <div id="password">
            <label htmlFor="">Senha</label>
            <input type="password" name="password-input" id="password-input" required={true} />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </div>
  )
}
