const assinanteModel = require('../models/AssinanteModel');

class AssinanteController{

    async cadastrar(req, res){
        
        let assinante = req.body;

        
        if(req.file){
            assinante.imagem = req.file.path
        } 

        const resultado = await assinanteModel.create(assinante);
        res.status(201).json(resultado);
        console.log(resultado);
        
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await assinanteModel.findOne({ 'codigo': codigo }))._id);
        await assinanteModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async listar(req, res){
        const resultado = await assinanteModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res) {
        const codigo = req.params.codigo;
        const resultado = await assinanteModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await assinanteModel.findOne({ 'codigo': codigo }))._id);
        await assinanteModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new AssinanteController;