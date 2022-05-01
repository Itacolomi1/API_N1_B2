const mongoose = require('../config/database');

const produtoSchema = new mongoose.Schema(
    {
        codigo: { type: Number, required: true },
        descricao: { type: String, required: true },
        categoria: { type: Number, required: true },
        quantidadeEstoque: { type: Number, required: true },
        estoqueMinimo: { type: Number, required: true },
        ativo: { type: Boolean, required: true },
    }
)

module.exports = mongoose.model('Produto', produtoSchema);