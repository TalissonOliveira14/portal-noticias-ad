const express = require('express');
const router = express.Router();

const {
  criarFormulario,
  listarFormularios
} = require('../controllers/formulario.controller');

router.post('/', criarFormulario);
router.get('/', listarFormularios);

module.exports = router;
