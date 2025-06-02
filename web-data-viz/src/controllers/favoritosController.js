const favoritosModel = require("../models/favoritosModel");

function favoritos(req, res) {
    favoritosModel.favoritos(req, res);
}

function deletar(req, res) {
    favoritosModel.deletar(req, res);
}

function listarPorUsuario(req, res) {
    favoritosModel.listarPorUsuario(req, res);
}

module.exports = {
    favoritos,
    deletar,
    listarPorUsuario
};