var quizModel = require("../models/quizModel");


function guardarPontuacao(req, res){

    var pontuacao = req.body.pontuacaoServer;
    var idusuario = req.body.idusuarioServer;
    
    if (pontuacao == undefined) {
        res.status(400).send("Sua pontuacao está undefined!");
    } else if (idusuario == undefined) {
        res.status(400).send("Seu idusuario está undefined!");
    }  else {

        quizModel.guardarPontuacao(pontuacao, idusuario)
            .then(
               resultado => res.json({ sucesso: true, resultado })
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o envio da pontuacao! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function pontuacaoUsuario(req, res) {
    const idusuario = req.params.idusuario;

    quizModel.pontuacaoUsuario(idusuario)
        .then(result => res.json(result))
        .catch(erro => {
            console.error("Erro ao buscar pontuações:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    guardarPontuacao,
    pontuacaoUsuario
}