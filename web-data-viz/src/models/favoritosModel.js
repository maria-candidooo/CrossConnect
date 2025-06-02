const database = require("../database/config");

// Adicionar favorito
function favoritos(req, res) {
    const { idusuario, idpost } = req.body;
    console.log("Favoritar:", idusuario, idpost)
    if (!idusuario || !idpost) {
        return res.status(400).json({ erro: "idusuario e idpost são obrigatórios" });
    }
    const instrucaoSql = `
        INSERT INTO favoritos (idusuario, idpost)
        VALUES (${idusuario}, ${idpost});
    `;
    database.executar(instrucaoSql)
        .then(resultado => res.status(201).json(resultado))
        .catch(erro => {
            if (erro.code === 'ER_DUP_ENTRY') { // MySQL
                res.status(200).json({ mensagem: "Já favoritado" });
            } else {
                res.status(500).json(erro);
            }
        });
}

// Remover favorito
function deletar(req, res) {
    const { idpost, idusuario } = req.params;
    console.log("Desfavoritar:", idusuario, idpost);

    const instrucaoSql = `
        DELETE FROM favoritos WHERE idpost = ${idpost} AND idusuario = ${idusuario};
    `;
    database.executar(instrucaoSql)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro));
}

// Listando os  favoritos do usuário
function listarPorUsuario(req, res) {
    const { idusuario } = req.params;
    const instrucaoSql = `
        SELECT * FROM favoritos WHERE idusuario = ${idusuario};
    `;
    database.executar(instrucaoSql)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro));
}

module.exports = {
    favoritos,
    deletar,
    listarPorUsuario
};