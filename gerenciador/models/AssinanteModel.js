const mongoose = require('mongoose');
const Schema = mongoose.Schema

const assinanteSchema = new Schema({
    codigo: Number,
    nome: String,    
    sobrenome: String,
    nascimento: Date,
    telefone: Number,
    endereco: String,
    cidade: String,
    estado: String,
    status: Boolean,
    imagem: String
})

module.exports = mongoose.model('assinante', assinanteSchema); 