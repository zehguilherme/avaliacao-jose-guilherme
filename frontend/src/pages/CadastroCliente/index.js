import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

export default function CadastroCliente () {

  // Criação de estados para cada um dos inputs
  const [name, setName] = useState('')       //Nome: input de texto -> inicia com valor vazio ''
  const [cpf, setCpf] = useState('')         //CPF
  const [address, setAddress] = useState('') //Endereço
  const [phone, setPhone] = useState('')     //Telefone

  const history = useHistory()

  // Responsável pelo cadastro do cliente - disparada quando o form der 'submit'
  async function cadastroCliente (e) {
    e.preventDefault()  //vai previnir o comportamento padrão do form (recarregar página toda)

    const data = {
      name,
      cpf,
      address,
      phone
    }

    try {
      await api.post('/clients', data)  //response

      history.push('/consulta-cliente')  //envia o usuário para a página de consulta de clientes

      alert('Cadastro realizado com sucesso')

    } catch (error) {
      alert('Erro no cadastro, tente novamente')
    }
  }

  /*******************************************************************************************************************************/

  return (
    <div className="cadastro-cliente-container">
      <section className="form">
        <form onSubmit={cadastroCliente}>
          <h1>Cadastro de Cliente</h1>

          <div id="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              required={true}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>


          <div id="cpf">
            <input
              type="text"
              name="cpf"
              id="cpf"
              placeholder="CPF"
              required={true}
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />
          </div>

          <div id="addres">
            <input
              type="text"
              name="addres"
              id="addres"
              placeholder="Endereço"
              required={true}
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>

          <div id="phone">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Telefone"
              required={true}
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <button type="submit">Cadastrar</button>

          <Link to="/">
            Voltar para home
          </Link>
        </form>
      </section>
    </div>
  )
}
