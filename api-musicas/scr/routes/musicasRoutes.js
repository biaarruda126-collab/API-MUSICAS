// Importar o Express para criar o router
const express = require('express');
const router = express.Router();

// Importar as funções do Controller
const MusicaController = require('../controllers/musicasController');

// ============================================================
// DEFINIÇÃO DAS ROTAS
// ============================================================

// ROTAS ESPECÍFICAS (devem vir antes das rotas genéricas)

router.get('/busca/nome/:nome', MusicaController.buscarPorNome);

// ROTAS GENÉRICAS

router.get('/', MusicaController.listarTodos);

router.get('/:id', MusicaController.buscarPorId);

router.post('/', MusicaController.criar);

router.put('/:id', MusicaController.atualizar);

router.delete('/:id', MusicaController.deletar);

// ============================================================
// EXPORTAR O ROUTER
// ============================================================
module.exports = router;

