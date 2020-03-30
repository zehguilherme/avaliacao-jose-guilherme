import React from 'react'

import './styles.css'

export default function CadastroCliente () {
  return (
    <div className="cadastro-container">
      <section className="form">
        <form action="">
          <h1>Cadastro de Cliente</h1>

          <label htmlFor="">Nome</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="">CPF</label>
          <input type="text" name="cpf" id="cpf" />

          <label htmlFor="">Endereço</label>
          <input type="text" name="addres" id="addres" />

          <label htmlFor="">Telefone</label>
          <input type="text" name="phone" id="phone" />

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </div>
  )
}
