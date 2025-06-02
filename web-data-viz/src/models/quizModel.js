var database = require("../database/config")

function guardarPontuacao(pontuacao, idusuario) {

    var instrucaoSql = `
      INSERT INTO quiz (pontuacao, idusuario) VALUES (${pontuacao}, ${idusuario})
   `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pontuacaoUsuario(idusuario) {
    const instrucaoSql = `
        SELECT pontuacao 
        FROM quiz 
        WHERE idusuario = ${idusuario}
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    guardarPontuacao,
    pontuacaoUsuario
}
