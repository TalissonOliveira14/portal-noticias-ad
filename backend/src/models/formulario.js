const mongoose = require('mongoose');

const FormularioSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true
    },
    congregacao: {
      type: String,
      required: true
    },
    setor: {
      type: String,
      required: true
    },
    novoConvertido: {
      type: Boolean,
      default: false
    },
    evangelico: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Formulario', FormularioSchema);
