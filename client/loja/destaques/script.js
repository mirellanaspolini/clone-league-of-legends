// alert("asdsa");

async function carregarChamps() {
    const dados = await fetch("./json/mais-populares.json");
    const json = await dados.json();
    const grid = document.querySelector("main");
    // grid.innerHTML = "";
    json.forEach((item) => {
        console.log(item);
        grid.innerHTML += `<div class="card bumumb" data-percPromocao=${
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
             <span>
             ${item.price[2]}
                 <p class="preco-rp">${item.price[0]}</p>
                 <p class="preco-ea">${item.price[1]}</p>
                 <p>${item.price[2]}</p>
             </span>
         </div>
         </div>`;
    });
}

carregarChamps();

// `<div class="card bumumb" data-percPromocao="50" data-promocao="true">
// <img
//     src="https://live.staticflickr.com/65535/52265760794_0c16d57bc7_q.jpg"
//     width="240"
//     height="240"
//     alt="Jax"
// />
// <div class="card-info-bg">
//     <p class="text-capitalize">jax oriental</p>
//     <span>
//         <p class="preco-rp">375</p>
//     </span>
// </div>
// </div>`;

// grid.innerHTML +=
