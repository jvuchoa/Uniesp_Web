require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const noticiaRoutes = require('./routes/noticia.routes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Erro MongoDB:', err));

// Rotas
app.use('/api/noticias', noticiaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});
