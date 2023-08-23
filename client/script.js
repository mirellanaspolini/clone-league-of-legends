var header = document.querySelector(".header");
var conteudo_geral = document.querySelector(".geral");
var botao_inicio = document.querySelector(".botao-inicio");
var botao_loja = document.querySelector(".botao-loja");

function abrir_inicio() {
    header.innerHTML = `
    <nav>
        <ul class="d-flex gap-4 text-uppercase">
            <li class="links-desabilitados">visão geral</li>
            <li style="cursor: pointer;">outro céu</li>
            <li class="links-desabilitados">cblol esports</li>
            <li class="links-desabilitados">notas de atualização</li>
        </ul>
        </nav>`;
    header.classList.add("header-inicio");
    header.classList.remove("header-destaques");
    header.classList.remove("header-campeoes");

    var conteudo_geral = document.querySelector(".geral");
    conteudo_geral.innerHTML = `<div id="carrossel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carrossel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carrossel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div class="carousel-inner carrossel-inicio">
        <!-- PRIMEIRO -->
        <div class="carousel-item active">
            <div class="desenvolvido">
                <p class="direitos">Este é um projeto apenas para fins educacionais. Foi criado apenas para testar nossas habilidades Front/Back-End. Todos os direitos autorais e identidade da marca pertencem a Riot Games.</p>
            </div>
        </div>
        <!-- SEGUNDO -->
        <div class="carousel-item">
            <div class="desenvolvido">
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
            <li style="cursor: pointer;">destaques</li>
            <li style="cursor: pointer;" onclick="abrir_loja_campeoes()">campeões</li>
            <li class="links-desabilitados">skins</li>
            <li class="links-desabilitados">tft</li>
            <li class="links-desabilitados">espólios</li>
            <li class="links-desabilitados">acessórios</li>
        </ul>
    </nav>
    <div class="d-flex gap-3 header-destaques-botoes">
        <button class="links-desabilitados">COMPRE RP</button>
        <button class="links-desabilitados"><img src="./img/loja/presentes-icone.svg" alt=""></button>
        <button class="links-desabilitados"><img src="./img/loja/configuracoes-icone.svg" alt=""></button>
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
            <li style="cursor: pointer;" onclick="abrir_loja()">destaques</li>
            <li style="cursor: pointer;">campeões</li>
            <li class="links-desabilitados">skins</li>
            <li class="links-desabilitados">tft</li>
            <li class="links-desabilitados">espólios</li>
            <li class="links-desabilitados">acessórios</li>
        </ul>
    </nav>
    <div class="d-flex gap-3 header-destaques-botoes">
        <button class="links-desabilitados">COMPRE RP</button>
        <button class="links-desabilitados"><img src="./img/loja/presentes-icone.svg" alt=""></button>
        <button class="links-desabilitados"><img src="./img/loja/configuracoes-icone.svg" alt=""></button>
    </div>`;
    header.classList.add("header-campeoes");
    header.classList.remove("header-destaques");
    header.classList.remove("header-inicio");

    conteudo_geral.innerHTML = `<object style="height: 100%; width: 100%;" type="text/html" data="./loja/campeoes/index.html"></object>`;
}

async function carregarSocial() {
    const dados = await fetch("./json/social.json");
    const json = await dados.json();
    const wrapper = document.querySelector(".wrapper-pastas");
    json.forEach((pasta, indice) => {
        for (const [key, value] of Object.entries(pasta)) {
            // console.log(value);
            let totalamigos = 0;
            if (value.status !== "Offline") {
                totalamigos++;
            }

            const nomepasta = key.replace(/ /g, "-");


            wrapper.innerHTML += `
                 <button class="btn text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#${nomepasta}">${key} (${totalamigos}/${
                value.length
            })</button>
            <div class="collapse multi-collapse" id="${nomepasta}">
                    <ul></ul>
                </div>`;

            Object.entries(value).forEach(([key, value]) => {
                wrapper.querySelector(`#${nomepasta} ul`).innerHTML += `                
                            <li class="social-box">
                                <img width="36" class="social-img" src=${
                                    value.img
                                } alt="">
                                <div>
                                    <p style="color: #929994;">${value.name}</p>
                                    <p class="status ${
                                        value.status === "Em partida" || value.status === "Seleção de Campeões"
                                            ? "azul"
                                            : value.status === "Online"
                                            ? "online"
                                            : value.status === "Lol+"
                                            ? "lol-plus"
                                            : value.status === "Criando partida de TFT"
                                            ? "ausente"
                                            : "offline"
                                    }">${value.status}</p>
                                </div>
                            </li>
                `;
            });
        }
    });
}

carregarSocial();
