const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  res.json({ message: 'Login funcionando' });
});

router.post('/register', async (req, res) => {
  res.json({ message: 'Registro funcionando' });
});

module.exports = router;
