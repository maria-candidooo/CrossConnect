var aquarioModel = require("../models/aquarioModel");

function qtdPostCategoria(req, res) {
  aquarioModel.qtdPostCategoria()
  .then(resultado => res.json(resultado))
  .catch(erro => res.status(500).json(erro));


}

module.exports = {
  qtdPostCategoria
}