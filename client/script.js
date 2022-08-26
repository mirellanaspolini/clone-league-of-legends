var header = document.querySelector(".header");
var conteudo_geral = document.querySelector(".geral");
var botao_inicio = document.querySelector(".botao-inicio");
var botao_loja = document.querySelector(".botao-loja");

function abrir_inicio() {
    header.innerHTML = `
    <nav>
        <ul class="d-flex gap-4 text-uppercase">
            <li>visão geral</li>
            <li>outro céu</li>
            <li>cblol esports</li>
            <li>notas de atualização</li>
        </ul>
        </nav>`;
    header.classList.add("header-inicio");
    header.classList.remove("header-destaques");
    header.classList.remove("header-campeoes");

    var conteudo_geral = document.querySelector(".geral");
    conteudo_geral.innerHTML = `<div class="desenvolvido">
    <h2 style="margin-bottom: 18px;font-weight: 700;">DESENVOLVIDO POR:</h2>
    <div class="info-devs">
        <div class="devs">
            <h3 style="margin-bottom: 6px;">Mirella Naspolini</h3>
            <a href="https://github.com/mirellanaspolini" target="_blank"><i style="margin-right: 6px;" class="fab fa fa-github" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/mirellanaspolini-12768322b/" target="_blank"><i class="fab fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
        <div class="devs">
            <h3 style="margin-bottom: 6px;">Vinícius Porto</h3>
            <a href="https://github.com/ViniPorto" target="_blank"><i style="margin-right: 6px;" class="fab fa fa-github" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/vinicius-porto-9a1996209/" target="_blank"><i width="40" class="fab fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
</div>
<img src="https://live.staticflickr.com/65535/52280173860_fbdca2d4ee_h.jpg" width="800" height="510" alt="wallpaper">`;

    botao_inicio.classList.add("ativo");
    botao_loja.classList.remove("ativo");
}

function abrir_loja() {
    header.innerHTML = `
    <nav>
        <ul class="d-flex gap-4 text-uppercase">
            <li>destaques</li>
            <li onclick="abrir_loja_campeoes()">campeões</li>
            <li>skins</li>
            <li>tft</li>
            <li>espólios</li>
            <li>acessórios</li>
        </ul>
    </nav>
    <div class="d-flex gap-3 header-destaques-botoes">
        <button>COMPRE RP</button>
        <button><img src="./img/presentes-icone.svg" alt=""></button>
        <button><img src="./img/configuracoes-icone.svg" alt=""></button>
    </div>`;
    header.classList.add("header-destaques");
    header.classList.remove("header-inicio");
    header.classList.remove("header-campeoes");

    conteudo_geral.innerHTML = `<object style="height: 100%; width: 100%;" type="text/html" data="./loja/destaques/index.html"></object>`;

    botao_inicio.classList.remove("ativo");
    botao_loja.classList.add("ativo");
}

function abrir_loja_campeoes() {
    let header = document.querySelector(".header");
    header.innerHTML = `
    <nav>
        <ul class="d-flex gap-4 text-uppercase">
            <li onclick="abrir_loja()">destaques</li>
            <li>campeões</li>
            <li>skins</li>
            <li>tft</li>
            <li>espólios</li>
            <li>acessórios</li>
        </ul>
    </nav>
    <div class="d-flex gap-3 header-destaques-botoes">
        <button>COMPRE RP</button>
        <button><img src="./img/presentes-icone.svg" alt=""></button>
        <button><img src="./img/configuracoes-icone.svg" alt=""></button>
    </div>`;
    header.classList.add("header-campeoes");
    header.classList.remove("header-destaques");
    header.classList.remove("header-inicio");

    conteudo_geral.innerHTML = `<object style="height: 100%; width: 100%;" type="text/html" data="./loja/campeoes/index.html"></object>`;
}
