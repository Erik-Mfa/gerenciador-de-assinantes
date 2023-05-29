const mongoose = require('mongoose');

const assinanteSchema = new mongoose.Schema({
    id: Number,
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