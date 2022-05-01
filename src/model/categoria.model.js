const mongoose = require('../config/database');

const categoriaSchema = new mongoose.Schema(
    {
        codigo: { type: Number, required: true },
        descricao: { type: String, required: true }        
    }
)

module.exports = mongoose.model('Categoria', categoriaSchema);