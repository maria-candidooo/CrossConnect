var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get('/pontuacao', (req, res) => {
  usuarioController.maiorPontuacao(req, res);

});

router.get('/listarFavoritos', (req, res) => {
  usuarioController.listarFavoritos(req, res);

});


module.exports = router;