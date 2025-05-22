const express = require('express');
const router = express.Router();
const Noticia = require('../models/Noticia');

// GET: retorna todas as notícias
router.get('/', async (req, res) => {
  try {
    const noticias = await Noticia.find();
    res.json(noticias);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notícias' });
  }
});

// POST: cria uma nova notícia
router.post('/', async (req, res) => {
  try {
    const novaNoticia = new Noticia(req.body);
    await novaNoticia.save();
    res.status(201).json(novaNoticia);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao salvar notícia', erro: error.message });
  }
});

// DELETE: remove uma notícia pelo ID
router.delete('/:id', async (req, res) => {
  try {
    await Noticia.findByIdAndDelete(req.params.id);
    res.json({ message: 'Notícia removida com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar notícia' });
  }
});

module.exports = router;
