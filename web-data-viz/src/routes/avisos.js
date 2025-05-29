var express = require("express");
var router = express.Router();
const multer = require('multer');
const path = require('path');

var avisoController = require("../controllers/avisoController");

// Configuração do destino e nome do arquivo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/'); // Pasta onde as imagens serão salvas
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Nome único
    }
});

const upload = multer({ storage: storage });

// Na sua rota:
router.post('/publicar/:idusuario', upload.single('imagem'), function (req, res) {
    // req.file contém as infos do arquivo
    // req.body contém os outros campos do formulário
    avisoController.publicar(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idusuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:conteudo", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.put("/editar/:idpost", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idpost", function (req, res) {
    avisoController.deletar(req, res);
});

router.get("/:idpost", function (req, res) {
    avisoController.buscarPorId(req, res);
});

module.exports = router;