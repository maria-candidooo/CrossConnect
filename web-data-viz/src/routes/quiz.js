var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/guardarPontuacao", function (req, res) {
    quizController.guardarPontuacao(req, res);
});

router.get("/pontuacao/:idUsuario", function (req, res) {
    quizController.pontuacaoUsuario(req, res);
});

module.exports = router;