const express = require("express");
const cors = require('cors');
const server = express(); 
server.use(express.json());
server.use(cors());

server.get('/teste', (req, res)=> {
  res.send('tudo certo com a api!!!!');
});


server.listen(3000, () => {
    console.log('API online');
});