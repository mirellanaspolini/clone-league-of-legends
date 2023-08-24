const header = document.querySelector(".header");
const listaClasses = header.classList;
var conteudoGeral = document.querySelector(".geral");
var botaoInicio = document.querySelector(".botao-inicio").classList;
var botaoLoja = document.querySelector(".botao-loja").classList;

const devs = [
    {
        nome: "Mirella Naspolini",
        usuario: "https://github.com/mirellanaspolini",
        linkedin: "https://www.linkedin.com/in/mirellanaspolini-12768322b/",
    },
    {
        nome: "Vinícius Porto",
        github: "https://github.com/ViniPorto",
        linkedin: "https://www.linkedin.com/in/vinicius-porto-9a1996209/",
    },
];

const printDevs = (lista) => {
    lista.forEach((dev) => {
        document.querySelector(".info-devs").innerHTML += `<div class="devs">
            <h3 style="margin-bottom: 6px;">${dev.nome}</h3>
            <a href="${dev.github}" target="_blank">
                <i style="margin-right: 6px;" class="fab fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="${dev.linkedin}" target="_blank">
                <i class="fab fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
        </div>`;
    });
};

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
    listaClasses.add("header-inicio");
    listaClasses.remove("header-destaques");
    listaClasses.remove("header-campeoes");

    conteudoGeral.innerHTML = `<div id="carrossel" class="carousel slide" data-bs-ride="carousel">
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
        <div class="carousel-item ">
            <div class="desenvolvido">
                <h2 style="margin-bottom: 18px;font-weight: 700;">DESENVOLVIDO POR:</h2>
                <div class="info-devs"></div>
            </div>
        </div>
    </div>
    </div>
    <img src="https://live.staticflickr.com/65535/52280173860_fbdca2d4ee_h.jpg" width="800" height="510" alt="wallpaper">`;

    printDevs(devs);

    botaoInicio.add("ativo");
    botaoLoja.remove("ativo");
}

function abrir_loja() {
    textoNav();

    listaClasses.add("header-destaques");
    listaClasses.remove("header-inicio");
    listaClasses.remove("header-campeoes");

    exibeConteudo("destaques");

    botaoInicio.remove("ativo");
    botaoLoja.add("ativo");
}

function abrir_loja_campeoes() {
    textoNav();

    listaClasses.add("header-campeoes");
    listaClasses.remove("header-destaques");
    listaClasses.remove("header-inicio");

    exibeConteudo("campeoes");
}

async function carregarSocial() {
    const dados = await fetch("./json/social.json");
    const json = await dados.json();
    const wrapper = document.querySelector(".wrapper-pastas");

    const printaAmigos = (lista, pasta) => {
        Object.entries(lista).forEach(([key, value]) => {
            wrapper.querySelector(`#${pasta} ul`).innerHTML += `                
            <li class="social-box">
            <img width="36" class="social-img" src=${value.img} alt="Ícone do invocador">
            <div>
            <p style="color: #929994;">${value.name}</p>
        <p class="status ${statusCor(value.status)}">${value.status}</p>
                    </div>
                </li>`;
        });
    };

    json.forEach((pasta) => {
        console.log(pasta);
        for (const [key, value] of Object.entries(pasta)) {
            const nomepasta = key.replace(/ /g, "-");

            wrapper.innerHTML += `
                 <button class="btn text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#${nomepasta}">${key} (${value.length}/${value.length})</button>
            <div class="collapse multi-collapse" id="${nomepasta}">
                    <ul></ul>
                </div>`;

            printaAmigos(value, nomepasta);
        }
    });
}

const textoNav = () => {
    header.innerHTML = `<nav>
        <ul class="d-flex gap-4 text-uppercase">
           <li style="cursor: pointer;" onclick="abrir_loja()">destaques</li>
        <li style="cursor: pointer;" onclick="abrir_loja_campeoes()">campeões</li>
            <li class="links-desabilitados">skins</li>
            <li class="links-desabilitados">tft</li>
            <li class="links-desabilitados">espólios</li>
            <li class="links-desabilitados">acessórios</li>
        </ul>
    </nav>
    <div class="d-flex gap-3 header-destaques-botoes">
        <button class="links-desabilitados">COMPRE RP</button>
        <button class="links-desabilitados"><img src="./img/loja/presentes-icone.svg" alt="Dar presente"></button>
        <button class="links-desabilitados"><img src="./img/loja/configuracoes-icone.svg" alt="Configurações"></button>
    </div>`;
};

const statusCor = (value) => {
    if (value === "Em partida" || value === "Seleção de Campeões")
        return "azul";
    else if (value === "Online") return "online";
    else if (value === "Lol+") return "lol-plus";
    else if (value === "Criando partida de TFT") return "ausente";
    else return "offline";
};

const exibeConteudo = (pagina) => {
    conteudoGeral.innerHTML = `<object style="height: 100%; width: 100%;" type="text/html" data="./loja/${pagina}/index.html"></object>`;
};

printDevs(devs);

carregarSocial();
