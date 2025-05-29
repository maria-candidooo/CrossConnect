var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            p.idpost,
            p.idusuario,
            p.conteudo,
            p.imagem,
            p.categoria,
            p.data,
            DATE_FORMAT(p.data,'%H:%i:%s'),
            u.idusuario,
            u.nome,
            u.sobrenome,
            u.email,
            u.senha
        FROM post p
            INNER JOIN usuario u
                ON p.idusuario = u.idusuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorId(idpost) {
    var instrucaoSql = `
        SELECT 
            p.idpost,
            p.idusuario,
            p.conteudo,
            p.imagem,
            p.categoria,
            p.data,
            u.nome
        FROM post p
        INNER JOIN usuario u ON p.idusuario = u.idusuario
        WHERE p.idpost = ${idpost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            p.idpost,
            p.idusuario,
            p.conteudo,
            p.imagem,
            p.categoria,
            p.data,
            DATE_FORMAT(p.data,'%H:%i:%s'),
            u.idusuario,
            u.nome,
            u.sobrenome,
            u.email,
            u.senha
        FROM post p
            INNER JOIN usuario u
                 ON p.idusuario = u.idusuario
        WHERE p.conteudo LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idusuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            p.idpost,
            p.idusuario,
            p.conteudo,
            p.imagem,
            p.categoria,
            p.data,
            DATE_FORMAT(p.data,'%H:%i:%s'),
            u.idusuario,
            u.nome,
            u.sobrenome,
            u.email,
            u.senha
        FROM post p
            INNER JOIN usuario u
               ON p.idusuario = u.idusuario
        WHERE u.idusuario = ${idusuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(idusuario, conteudo, imagem, categoria, data) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", conteudo, imagem, categoria, idusuario);
    var instrucaoSql = `
        INSERT INTO post (idusuario, conteudo, imagem, categoria, data) VALUES (${idusuario}, '${conteudo}', '${imagem}','${categoria}', NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, idpost) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idpost);
    var instrucaoSql = `
        UPDATE post SET conteudo = '${novaDescricao}' WHERE idpost = ${idpost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletar(idpost) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idpost);
    var instrucaoSql = `
        DELETE FROM post WHERE idpost = ${idpost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar,
    buscarPorId
}
