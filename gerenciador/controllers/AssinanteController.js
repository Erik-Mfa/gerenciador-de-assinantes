const assinanteModel = require('../models/AssinanteModel');

class AssinanteController{
    async cadastrar(req, res){
        let assinante = req.body;
        // const max = await assinanteModel.findOne({}).sort({ codigo: -1 });
        // assinante.id = max == null ? 1 : max.id + 1;
        const resultado = await assinanteModel.create(assinante);
        res.status(201).json(resultado);
    }

    async listar(req, res){
        const resultado = await assinanteModel.find({});
        res.status(200).json(resultado);
    }
}

module.exports = new AssinanteController;