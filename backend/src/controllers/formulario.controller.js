const Formulario = require('../models/formulario');

exports.criarFormulario = async (req, res) => {
  try {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
      return res.status(400).json({
        message: 'Todos os campos são obrigatórios'
      });
    }

    const novoFormulario = await Formulario.create({
      nome,
      email,
      mensagem
    });

    return res.status(201).json({
      message: 'Formulário enviado com sucesso',
      data: novoFormulario
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Erro ao enviar formulário',
      error: error.message
    });
  }
};

exports.listarFormularios = async (req, res) => {
  try {
    const formularios = await Formulario.find().sort({ createdAt: -1 });
    return res.json(formularios);
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao buscar formulários'
    });
  }
};
