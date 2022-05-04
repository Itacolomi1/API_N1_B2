const express = require("express");
const cors = require('cors');
const server = express(); 
server.use(express.json());
server.use(cors());

server.get('/teste', (req, res)=> {
  res.send('tudo certo com a api!!!!');
});

const categoriaRouter = require('./routers/categoria.router');
const produtoRouter = require('./routers/produto.router');

server.use('/categoria',categoriaRouter);
server.use('/produto',produtoRouter);

server.listen(3000, () => {
    console.log('API online');
});