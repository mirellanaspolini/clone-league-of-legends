var user_cadastrado = "user10";
var senha_cadastrada = "senhaforte55";
var imput_user = document.querySelectorAll(".login-input")[0];
var imput_senha = document.querySelectorAll(".login-input")[1];
var login_botao = document.querySelectorAll(".login-button")[0];

function spin() {
    document.querySelector(".login-form").innerHTML += `<div class="spin"><div heigth="40" weight="40" class="spinner-border" role="status"></div></div>`;
    setTimeout(() => {
        document.querySelector(".spin").style.visibility = "hidden";
    }, 1500);
}

function login() {
    let user = String(document.querySelectorAll(".login-input")[0].value);
    let senha = String(document.querySelectorAll(".login-input")[1].value);
    console.log(senha);

    spin();

    if (senha === senha_cadastrada && user === user_cadastrado) {
        setTimeout(() => {
            location.href = "http://127.0.0.1:5500/loading/loading.html";
        }, 1500);
    } else {
        let span_user = document.querySelectorAll(".login-span")[0];
        let span_senha = document.querySelectorAll(".login-span")[1];
        let imput_user = document.querySelectorAll(".login-input")[0];

        span_user.style.color = "#c813d8";
        imput_user.style.border = "2px solid #E7C0E8";
        imput_user.style.backgroundColor = "#F3E2F4";

        let imput_senha = document.querySelectorAll(".login-input")[1];

        span_senha.style.color = "#c813d8";
        imput_senha.style.border = "2px solid #E7C0E8";
        imput_senha.style.backgroundColor = "#F3E2F4";

        document.querySelector(".login-form").innerHTML += `<span class="mensagem-erro">Suas credenciais de login não coincidem com uma conta em nosso sistema.</span>`;
    }
}

window.addEventListener("keydown", () => {
    if (imput_user.value !== "" && imput_senha.value !== "") {
        login_botao.style.backgroundColor = "#c73033";
    }
    if (imput_user.value == "" && imput_senha.value == "") {
        login_botao.style.backgroundColor = "#fff";
    }
});


