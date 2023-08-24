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
             src=${item.img}
             width="240"
             height="240"
             alt=""
         />
         <div class="card-info-bg">
             <p class="text-capitalize">${item.name}</p>
             <span id="precos-box">
                
             </span>
         </div>
         </div>`;
    });
    
    printaPreco(item);
}

const printaPreco = (item) => {
    const box = document.getElementById("precos-box").innerHTML;
    if (item.price[2]) {
        return (box = "<p>adquirido</p>");
    }
    if (item.price[1]) {
        return (box = `<p class="preco-rp">${item.price[0]}</p> <p class="preco-ea">${item.price[1]}</p>`);
    }
    return (box = `<p class="preco-rp">${item.price[0]}</p>`);
};

carregarCards();
