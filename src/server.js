// importar dependência (express). 
// require: retorna uma função

const express = require('express')

// iniciar express
// retorna um objeto

const server = express()

// criar caminho (default: / = /index.html)
// Dois parâmetros: request e response

server.get('/', (request, response) => { response.send('Oi') })

// ligar o servidor, que está escutando uma porta (5500)

server.listen(5500)