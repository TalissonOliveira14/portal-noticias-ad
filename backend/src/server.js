require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/database');
const formularioRoutes = require('./routes/formulario.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar ao banco
connectDB();

// Rotas
app.use('/api/formulario', formularioRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'API online 🚀' });
});

// Rota padrão
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
