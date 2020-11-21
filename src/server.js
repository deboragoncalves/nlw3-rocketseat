// importar dependência (express e path). 
// require: retorna uma função

const express = require('express')
const path = require('path')

// iniciar express
// retorna um objeto

const server = express()

// criar as rotas para as pastas que estão no public e são estáticas

server.use(express.static('public'))

// Configurar template engine

// Buscar arquivos da views e definir hbs como engine de visualizacao
// __dirname: localização atual. Join: une todos os parâmetros e retorna C/users/.../nlw3/src/views/index.html

server.set('views', path.join(__dirname, "views")).set('view engine', 'hbs')

// criar caminho (default: / = /index.html)
// Dois parâmetros: request e response

server.get('/', (request, response) => { 

    response.render('index')

})

// ligar o servidor, que está escutando uma porta (5500)

server.listen(5500)