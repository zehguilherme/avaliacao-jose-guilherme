import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import CadastroCliente from './pages/CadastroCliente'
import CadastroUsuario from './pages/CadastroUsuario'
import ConsultaCliente from './pages/ConsultaCliente'
import ConsultaUsuario from './pages/ConsultaUsuario'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>  {/*Switch: Garante que apenas uma rota seja chamada em cada momento*/}
        <Route path="/" exact component={Login} />                           {/*exact: caminho precisa ser exatamente começando com '/' (padrão) */}
        <Route path="/cadastro-cliente" exact component={CadastroCliente} />
        <Route path="/cadastro-usuario" exact component={CadastroUsuario} />
        <Route path="/consulta-cliente" exact component={ConsultaCliente} />
        <Route path="/consulta-usuario" exact component={ConsultaUsuario} />
      </Switch>
    </BrowserRouter>
  )
}
