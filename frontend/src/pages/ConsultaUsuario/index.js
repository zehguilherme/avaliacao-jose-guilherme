import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

export default function ConsultaUsuario () {

  const [users, setUsers] = useState([]) //buscar um conjunto de info do backend, array deve ser vazio []

  // Disparar uma função em algum determinado momento do componente (no momento de carregamento da página, em tempo real)
  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data)
    })
  }, [])

  return (
    <div className="consulta-usuario-container">
      <section className="form">
        <form action="">

          <header>
            <h1>Consulta de Usuários</h1>

            <Link to="/">
              Voltar para a home
            </Link>
          </header>

          <ul>
            {/* Percorrer cada usuário retornando algo */}
            {users.map(user => (
              // key: ajuda o react a encontrar qual item é qual ao necessitar deletar, modificar, trocar de posição, etc
              // user_name: valor unico para identificar todos os usuários
              <li key={user.user_name}>
                <div id="user-name">
                  <strong>Nome de usuário:</strong>
                  <p>{user.user_name}</p>
                </div>

                <div id="email">
                  <strong>E-mail:</strong>
                  <p>{user.email}</p>
                </div>

                <div id="phone">
                  <strong>Telefone:</strong>
                  <p>{user.phone}</p>
                </div>

                <div id="password">
                  <strong>Senha:</strong>
                  <p>{user.password}</p>
                </div>
              </li>
            ))}
          </ul>
        </form>
      </section>
    </div>
  )
}
