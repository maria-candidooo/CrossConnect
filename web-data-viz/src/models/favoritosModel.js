const database = require("../database/config");

// favoritar
function favoritos(req, res) {
    const { idusuario, idpost } = req.body;
   
    if (!idusuario || !idpost) {
        return res.status(400).json({ erro: "idusuario e idpost são obrigatórios" });
    }
    const instrucaoSql = `
        insert into favoritos (idusuario, idpost)
        values (${idusuario}, ${idpost});
    `;
    database.executar(instrucaoSql)
        .then(resultado => res.status(201).json(resultado))
       
}

// remover favorito
function deletar(req, res) {
    const { idpost, idusuario } = req.params;

    const instrucaoSql = `
        DELETE FROM favoritos WHERE idpost = ${idpost} AND idusuario = ${idusuario};
    `;
    database.executar(instrucaoSql)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro));
}

// listando os  favoritos do usuário
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