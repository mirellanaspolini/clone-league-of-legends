async function carregarCards() {
    const dados = await fetch("./json/mais-populares.json");
    const json = await dados.json();
    const grid = document.querySelector("main");
    json.forEach((item) => {
        console.log(item);

        grid.innerHTML += `<div class="card" data-percPromocao=${
            item.promotion[0] === true ? parseInt(item.promotion[1] * 100) : ""
        } data-promocao="true">
            <img
                src=${item.img} width="240" height="240" alt="" />
            <div class="card-info-bg">
                <p class="text-capitalize">${item.name}</p>
                <span id="precos-box">
                    ${printaPreco(item)}
                </span>
            </div>
        </div>`;
    });
}

const printaPreco = (item) => {
    if (item.price[2]) {
        return "<p>adquirido</p>";
    }
    if (item.price[1]) {
        return `<p class="preco-rp">${item.price[0]}</p> 
                <p class="preco-ea">${item.price[1]}</p>`;
    }
    return `<p class="preco-rp">${item.price[0]}</p>`;
};

carregarCards();
