const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/AssinanteController');
const upload = require('../public/javascripts/multer');

router.get('/', assinanteController.listar);
router.get('/:codigo', assinanteController.buscarPorId);
router.post('/', upload.single("imagem") ,assinanteController.cadastrar);
router.put('/:codigo', assinanteController.atualizar);
router.delete('/:codigo', assinanteController.excluir);

module.exports = router;