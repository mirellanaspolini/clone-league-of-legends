let divChamps = document.getElementById("grid-campeoes");
let json = [];

async function carregarChamps() {
    let dados = await fetch("./json/champs.json");
    json = await dados.json();
    divChamps.innerHTML = "";

    json.forEach((champ) => {
        divChamps.innerHTML += `<div class="card">
                                    <img src="${champ.image}" width="240" height="240" alt="${champ.name}">
                                    <div class="card-info-bg">
                                        <p class=" text-capitalize">${champ.name}</p>
                                        <span id="precos-box">
                                            <p class="preco-rp">${champ.rpPrice}</p>
                                            <p class="preco-ea">${champ.eaPrice}</p>
                                        </span>
                                    </div>
                                </div>`;
    });
}

window.addEventListener("load", carregarChamps());
