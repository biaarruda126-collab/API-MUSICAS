let musicas = [
    { id: 1, nome: '1. Jotapê, Papatinho - Macgyver (Até A Última Rima)', autor: 'JOTAPÊ', link: 'https://www.youtube.com/watch?v=RWasIxVg3zk&#39'},
    { id: 2, nome: '2. Jotapê, Papatinho - DeMar DeRozan (Até A Última Rima)', autor: 'JOTAPÊ', link: 'https://www.youtube.com/watch?v=D_u1EFBf0yw&#39'},
    { id: 3, nome: '3. Jotapê, Lulu Santos, Papatinho - LULU (Até A Última Rima)', autor: 'JOTAPÊ', link: 'https://www.youtube.com/watch?v=1qPvZygFbf4&#39 '}
];

// Variável que controla o próximo ID disponível
let proximoId = 4;

// ============================================================
// FUNÇÃO: listarTodos
// DESCRIÇÃO: Retorna todos os produtos cadastrados
// RETORNO: Array de produtos
// ============================================================
function listarTodos() {
    return musicas;
}

// ============================================================
// FUNÇÃO: buscarPorId
// DESCRIÇÃO: Busca um produto específico pelo ID
// PARÂMETRO: id (número) - identificador do produto
// RETORNO: Objeto produto ou undefined se não encontrar
// ============================================================
function buscarPorId(id) {
    return musicas.find(m => m.id === id);
}


// funcao: buscarPorNome
function buscarPorNome(nome) {
    return musicas.filter(m =>
        m.nome.toLowerCase().includes(nome.toLowerCase())
    );
}

// ============================================================
// FUNÇÃO: criar
// DESCRIÇÃO: Cria um novo produto no array
// PARÂMETRO: dados (objeto) - contém nome, preco, estoque, categoria
// RETORNO: O produto criado com o ID gerado
// ============================================================
function criar(dados) {
    const novaMusica = {
        id: proximoId++,
        nome: dados.nome,
        autor: dados.autor,
        link: dados.link
    };
   
    musicas.push(novaMusica);
    return novaMusica;
}

// ============================================================
// FUNÇÃO: atualizar
// DESCRIÇÃO: Atualiza todos os dados de um produto existente
// PARÂMETROS:
// - id (número): identificador do produto
// - dados (objeto): novos dados do produto
// RETORNO: Produto atualizado ou null se não encontrar
// ============================================================
function atualizar(id, dados) {
     // Encontrar a posição do produto no array
    const indice = musicas.findIndex(m => m.id === id);
     // Se não encontrou, retornar null
    if (indice === -1) {
        return null;
    }
    // Atualizar o produto mantendo o ID original
    musicas[indice] = {
        id, // Mantém o ID original
        nome: dados.nome,
        autor: dados.autor,
        link: dados.link
    };
    // Retornar o produto atualizado
    return musicas[indice];
}

// ============================================================
// FUNÇÃO: deletar
// DESCRIÇÃO: Remove um produto do array
// PARÂMETRO: id (número) - identificador do produto
// RETORNO: true se deletou, false se não encontrou
// ============================================================
function deletar(id) {
    // Encontrar a posição do produto
    const indice = musicas.findIndex(m => m.id === id);
    // Se não encontrou, retornar false
    if (indice === -1) {
        return false;
    }
        // Remover o produto do array
    // splice(posição, quantidade) remove elementos
    musicas.splice(indice, 1);
    return true;
}

// ============================================================
// EXPORTAR AS FUNÇÕES
// ============================================================
module.exports = {
    listarTodos,
    buscarPorId,
    buscarPorNome,
    criar,
    atualizar,
    deletar
};
