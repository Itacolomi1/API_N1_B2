const express = require('express');
const router = express.Router();
const CidadeController = require('../controller/CidadeController');

router.get('/',listarCategoria);
router.get('/categoria/:id',categoriaPorId);
router.post('/categoria',insereCategoria);
router.put('/categoria',alteraCategoria);
router.delete('/categoria/:id',deletaCategoria);

module.exports = router;