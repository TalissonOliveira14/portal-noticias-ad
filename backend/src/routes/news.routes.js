const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ message: 'Lista de notícias' });
});

router.post('/', async (req, res) => {
  res.json({ message: 'Notícia criada' });
});

module.exports = router;
