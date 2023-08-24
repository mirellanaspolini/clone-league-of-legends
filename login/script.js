const usuarioCadastrado = "user10";
const senhaCadastrada = "senhaforte55";
const txtUsuario = document.querySelector("#txtUsuario");
const txtSenha = document.querySelector("#txtSenha");
const btnLogin = document.querySelector(".login-button");
const form = document.querySelector("#login-form");

function spin() {
    form.innerHTML += `<div class="spin"><div heigth="40" weight="40" class="spinner-border" role="status"></div></div>`;
    setTimeout(() => {
        document.querySelector(".spin").style.visibility = "hidden";
    }, 1500);
}

function login() {
    btnLogin.classList.remove("ativo");
    const lblUsuario_valor = document.querySelector("#txtUsuario").value;
    const lblSenha_valor = document.querySelector("#txtSenha").value;

    spin();

    if (
        lblSenha_valor === senhaCadastrada &&
        lblUsuario_valor === usuarioCadastrado
    ) {
        setTimeout(() => {
            location.href = "/clone-league-of-legends/loading/";
        }, 1500);
    } else {
        let lblUsuario = document.querySelector(".lblUsuario");
        let lblSenha = document.querySelector(".lblSenha");

        lblUsuario.style.color = "#c813d8";
        txtUsuario.style.border = "2px solid #E7C0E8";
        txtUsuario.style.backgroundColor = "#F3E2F4";

        lblSenha.style.color = "#c813d8";
        txtSenha.style.border = "2px solid #E7C0E8";
        txtSenha.style.backgroundColor = "#F3E2F4";

        form.innerHTML += `<span class="mensagem-erro">Suas credenciais de login não coincidem com uma conta em nosso sistema.</span>`;
    }
}

form.addEventListener("keyup", () => {
    const lblUsuario_valor = document.querySelector("#txtUsuario").value;
    const lblSenha_valor = document.querySelector("#txtSenha").value;

    if (lblUsuario_valor === "" || lblSenha_valor === "") {
        btnLogin.disabled = true;
        btnLogin.classList.remove("ativo");
    } else if (lblSenha_valor.length < 3 || lblUsuario_valor.length < 3) {
        btnLogin.disabled = true;
        btnLogin.classList.remove("ativo");
    } else if (lblUsuario_valor !== "" && lblSenha_valor !== "") {
        btnLogin.classList.add("ativo");
        btnLogin.disabled = false;
    }
});
