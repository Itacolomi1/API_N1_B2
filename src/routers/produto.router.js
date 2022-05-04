const express = require('express');
const router = express.Router();
const ProdutoController = require('../controller/produto.controller');

router.get('/',ProdutoController.getAll);
router.get('/:id',ProdutoController.get);
router.post('/',ProdutoController.create);
router.put('/:id',ProdutoController.update);
router.delete('/:id',ProdutoController.delete);

module.exports = router;