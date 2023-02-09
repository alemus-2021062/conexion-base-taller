// importaciones principales

//require('dotenv').config();

//const Server = require('./models/server')

//Instancia del servidor de arranque
//const servidorIniciado = new Server();

//Llamar al metodo listen para levantar el servidor
//servidorIniciado.listen();


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello mundirijillo!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})