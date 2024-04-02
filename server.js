const express = require('express')//trazendo funcionalidades do express (framework do node)
const cors = require('cors')

const app = express() //instanciando o express (segunda etapa de configuração do express) 
const PORTA = 3333 // criando a constante porta para guardar a informação da porta
app.use(cors()) //instanciando cors e terminando a configuração para liberar a api ser integrada pelo nosso front

app.use(express.json()) //dizendo que o tipo de dado que a minha api permite enviar é JSON

const router = require('./route')
app.use('/', router)

app.listen(PORTA, console.log(`Rodando servidor na porta: ${PORTA}`)) //ligando o servidor