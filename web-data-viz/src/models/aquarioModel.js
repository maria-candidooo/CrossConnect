var database = require("../database/config");

function qtdPostCategoria() {

  var instrucaoSql = `SELECT categoria, count(*) as qtd FROM post group by categoria`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



module.exports = {
  qtdPostCategoria
}
