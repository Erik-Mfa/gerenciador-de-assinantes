const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/AssinanteController');

router.get('/', assinanteController.listar);
router.get('/:codigo', assinanteController.buscarPorId);
router.post('/', assinanteController.cadastrar);
router.put('/:codigo', assinanteController.atualizar);

module.exports = router;