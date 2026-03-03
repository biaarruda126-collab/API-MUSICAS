// Importar as funções do Model
const MusicaModel = require('../models/musicasModel');

// ============================================================
// FUNÇÃO: listarTodos
// ROTA: GET /produtos
// DESCRIÇÃO: Retorna todos os produtos cadastrados
// ============================================================
function listarTodos(req, res) {
    try {
        const musicas = MusicaModel.listarTodos();
        res.status(200).json(musicas);
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao listar músicas',
            erro: erro.message
        });
    }
}

// ============================================================
// FUNÇÃO: buscarPorId
// ROTA: GET /musicas/:id
// DESCRIÇÃO: Retorna uma música específica pelo ID
// ============================================================
function buscarPorId(req, res) {
    try {
        const id = parseInt(req.params.id);
       
        if (isNaN(id)) {
            return res.status(400).json({
                mensagem: 'ID inválido - deve ser um número'
            });
        }
       
        const musica = MusicaModel.buscarPorId(id);
       
        if (musica) {
            res.status(200).json(musica);
        } else {
            res.status(404).json({
                mensagem: `Música com ID ${id} não encontrada`
            });
        }
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao buscar música',
            erro: erro.message
        });
    }
}

// DESCRIÇÃO: Busca músicas por nome
function buscarPorNome(req, res) {
    try {
        const { nome } = req.params;
       
        if (!nome) {
            return res.status(400).json({
                mensagem: 'Nome da música é obrigatório'
            });
        }
       
        const musicas = MusicaModel.buscarPorNome(nome);
        res.status(200).json(musicas);
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao buscar músicas por nome',
            erro: erro.message
        });
    }
}

// ============================================================
// FUNÇÃO: criar
// ROTA: POST /produtos
// DESCRIÇÃO: Cria um novo produto
// ============================================================
function criar(req, res) {
    try {
        const { nome, autor, link } = req.body;
       
        // VALIDAÇÃO: campos obrigatórios
        if (!nome || !autor || !link) {
            return res.status(400).json({
                mensagem: 'Todos os campos são obrigatórios: nome, autor, link'
            });
        }
       
        // VALIDAÇÃO: link deve ser válido (simples)
        if (!link.startsWith('http')) {
            return res.status(400).json({
                mensagem: 'Link inválido - deve começar com http ou https'
            });
        }
       
        const novaMusica = MusicaModel.criar({ nome, autor, link });
        res.status(201).json(novaMusica);
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao criar música',
            erro: erro.message
        });
    }
}

// ============================================================
// FUNÇÃO: atualizar
// ROTA: PUT /produtos/:id
// DESCRIÇÃO: Atualiza todos os dados de um produto
// ============================================================
function atualizar(req, res) {
    try {
        const id = parseInt(req.params.id);
        const { nome, autor, link } = req.body;
       
        if (isNaN(id)) {
            return res.status(400).json({
                mensagem: 'ID inválido'
            });
        }
       
        if (!nome || !autor || !link) {
            return res.status(400).json({
                mensagem: 'Todos os campos são obrigatórios para atualização'
            });
        }
       
        if (!link.startsWith('http')) {
            return res.status(400).json({
                mensagem: 'Link inválido - deve começar com http ou https'
            });
        }
       
        const musicaAtualizada = MusicaModel.atualizar(id, { nome, autor, link });
       
        if (musicaAtualizada) {
            res.status(200).json(musicaAtualizada);
        } else {
            res.status(404).json({
                mensagem: `Música com ID ${id} não encontrada`
            });
        }
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao atualizar música',
            erro: erro.message
        });
    }
}

// ============================================================
// FUNÇÃO: deletar
// ROTA: DELETE /produtos/:id
// DESCRIÇÃO: Remove um produto do sistema
// ============================================================
function deletar(req, res) {
    try {
        const id = parseInt(req.params.id);
       
        if (isNaN(id)) {
            return res.status(400).json({
                mensagem: 'ID inválido'
            });
        }
       
        const deletado = MusicaModel.deletar(id);
       
        if (deletado) {
            res.status(200).json({
                mensagem: `Música com ID ${id} removida com sucesso`
            });
        } else {
            res.status(404).json({
                mensagem: `Música com ID ${id} não encontrada`
            });
        }
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao deletar música',
            erro: erro.message
        });
    }
}

// ============================================================
// EXPORTAR TODAS AS FUNÇÕES
// ============================================================
module.exports = {
    listarTodos,
    buscarPorId,
    buscarPorNome,
    criar,
    atualizar,
    deletar
};
