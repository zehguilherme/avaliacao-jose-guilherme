const express = require('express')
const routes = require('./routes')

const app = express()  //instanciação da aplicação

const routes = express.Router()  //modulo de rotas do express é armazenado na váriavel em questão

app.use(express.json())
app.use(routes)

app.listen(3333)
