const express = require('express') //importando toda as funções
const app = express() //Onde via ter todas as funcionalidades do express
const port = 3001  //Ip unico
//todos site tem um endereço especifico por exemplo do if 203.56.78.3 os id não se repetem.
//app.get representa  a pagina principal o / é a pagina tbm
//get é como se fosse um pedido para o servidor te oferecer o servidor(express)
app.get('/', (req, res) => {
  res.send(`<ul>
  <li><a href= "/Inserir">Inserir</a></li>
  <li><a href= "/Apagar">Apagar</a></li>
  <li><a href= "/Atualizar">Atualizar</a></li>
  <li><a href= "/Listar">Listar</a></li>

 
  </ul>`)
})
app.get('/Inserir', (req, res) => {
    res.send(`<h1>inserir</h1>
    <body>
    <ul>
    <li><a href= "/">Clique aqui para Voltar!!!</a></li>
   
    </ul>
    </body>`)
  })
  app.get('/Apagar', (req, res) => {
    res.send(`<h1>Apagar</h1>
    <body>
    <ul>
    <li><a href= "/">Clique aqui para Voltar!!!</a></li>
   
    </ul>
    </body>`)
  })
  app.get('/Atualizar', (req, res) => {
    res.send(`<h1>Atualizar</h1>
    <body>
    <ul>
    <li><a href= "/">Clique aqui para Voltar!!!</a></li>
   
    </ul>
    </body>`)
  })
  app.get('/Listar', (req, res) => {
    res.send(`<h1>Listar</h1>
    <body>
    <ul>
    <li><a href= "/">Clique aqui para Voltar!!!</a></li>
   
    </ul>
    </body>`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})