const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/AssinanteController');

router.get('/', assinanteController.listar);
router.post('/', assinanteController.cadastrar);

module.exports = router;