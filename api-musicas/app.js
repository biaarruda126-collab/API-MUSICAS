const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Importar as rotas
const musicaRoutes = require('./scr/routes/musicasRoutes');

// Registrar rotas com prefixo /musicas
app.use('/musicas', musicaRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`API de Músicas MVC implementada com sucesso!`);
});