const express = require('express');
const router = express.Router();
const CategoriaController = require('../controller/categoria.controler');

router.get('/',CategoriaController.getAll);
router.get('/:id',CategoriaController.get);
router.post('/',CategoriaController.create);
router.put('/',CategoriaController.update);
router.delete('/:id',CategoriaController.delete);

module.exports = router;