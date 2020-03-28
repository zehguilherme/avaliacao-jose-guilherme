const express = require('express')

const UserController = require('./controllers/UserController')
const ClientController = require('./controllers/ClientController')

const routes = express.Router()  //modulo de rotas do express passa para a variavel em questão

// Usuário
routes.post('/users', UserController.create) // Criar / cadastrar
// routes.get('/users', UserController.index)   // Listar / consultar

// Cliente
routes.post('/clients', ClientController.create)  // Criar / cadastrar
// routes.get('/clients', ClientController.index)   // Listar / consultar

module.exports = routes
