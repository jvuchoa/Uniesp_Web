const mongoose = require('mongoose');

const NoticiaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  conteudo: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Noticia', NoticiaSchema);
