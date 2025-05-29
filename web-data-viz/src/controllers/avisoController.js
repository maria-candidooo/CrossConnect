var avisoModel = require("../models/avisoModel");

function listar(req, res) {
    avisoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPorId(req, res) {
    var idpost = req.params.idpost;
    avisoModel.buscarPorId(idpost)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(404).send("Post não encontrado!");
            }
        })
        .catch(function (erro) {
            // console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarPorUsuario(req, res) {
    var idusuario = req.params.idusuario;

    avisoModel.listarPorUsuario(idusuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarConteudo(req, res) {
    var conteudo = req.params.conteudo;

    avisoModel.pesquisarConteudo(conteudo)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var categoria = req.body.categoria;
    var conteudo = req.body.conteudo;
    var idusuario = req.params.idusuario;
    var imagem =  req.file ? '/uploads/' + req.file.filename : null; // Caminho salvo
    // var data = req.params.data;

    if (categoria == undefined) {
        res.status(400).send("A categoria está indefinido!");
    } else if (conteudo == undefined) {
        res.status(400).send("O conteúdo está indefinido!");
    } else if (idusuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        avisoModel.publicar(idusuario, conteudo,imagem, categoria, null)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    var novaDescricao = req.body.conteudo;
    var idpost = req.params.idpost;

    avisoModel.editar(novaDescricao, idpost)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function deletar(req, res) {
    var idpost = req.params.idpost;

    avisoModel.deletar(idpost)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    buscarPorId,
    listarPorUsuario,
    pesquisarConteudo,
    publicar,
    editar,
    deletar
}

// for (let i = 0; i < resposta.length; i++) {
//     var publicacao = resposta[i];
//     // ...
//     if (publicacao.imagem) {
//         var img = document.createElement("img");
//         img.src = publicacao.imagem;
//         img.alt = "Imagem do post";
//         img.className = "publicacao-imagem";
//         divPublicacao.appendChild(img);
//     }
//     // ...
// }