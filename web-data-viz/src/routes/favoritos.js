var express = require("express");
var router = express.Router();

var favoritosController = require("../controllers/favoritosController");


router.post("/", function (req, res) {
    favoritosController.favoritos(req, res);
});

router.delete("/:idpost/:idusuario", function (req, res) {
    favoritosController.deletar(req, res);
});

router.get("/:idusuario", function (req, res) {
    favoritosController.listarPorUsuario(req, res);
});

module.exports = router;