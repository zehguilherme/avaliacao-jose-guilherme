const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()  //instanciação da aplicação

app.use(cors())
app.use(express.json())  //requisições no formato json
app.use(routes)

app.listen(3333)
