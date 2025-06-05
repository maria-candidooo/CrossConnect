// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    // var cpf = sessionStorage.CPF_USUARIO;

    var nome_user = document.getElementById("nome_user");

    if (email != null && nome != null) {
      nome_user.innerHTML = `Olá, ${nome}`;
      
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}



function finalizarAguardar(texto) {


    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

