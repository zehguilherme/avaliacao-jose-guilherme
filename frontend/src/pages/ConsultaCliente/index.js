import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

export default function ConsultaCliente () {

  const [clients, setClients] = useState([]) //buscar um conjunto de info do backend, array deve ser vazio []

  // Disparar uma função em algum determinado momento do componente (no momento de carregamento da página, em tempo real)
  useEffect(() => {
    api.get('clients').then(response => {
      setClients(response.data)
    })
  }, [])

  return (
    <div className="consulta-cliente-container">
      <section className="form">
        <form action="">
          <header>
            <h1>Consulta de Clientes</h1>

            <Link to="/">
              Voltar para a home
            </Link>
          </header>

          <ul>
            {/* Percorrer cada cliente retornando algo */}
            {clients.map(client => (
              // key: ajuda o react a encontrar qual item é qual ao necessitar deletar, modificar, trocar de posição, etc
              // name: valor unico para identificar todos os clientes
              <li key={client.name}>
                <div id="name">
                  <strong>Nome:</strong>
                  <p>{client.name}</p>
                </div>

                <div id="cpf">
                  <strong>CPF:</strong>
                  <p>{client.cpf}</p>
                </div>

                <div id="address">
                  <strong>Endereço:</strong>
                  <p>{client.address}</p>
                </div>

                <div id="phone">
                  <strong>Telefone:</strong>
                  <p>{client.phone}</p>
                </div>
              </li>
            ))}
          </ul>
        </form>
      </section>
    </div>
  )
}
