function constroiURL(){
    let url = "https://api-champs.herokuapp.com/champs";
    let name = document.getElementById("input-search-champ").value;
    let filters = [];
    for(let i = 0; i < 8; i++){
        if(document.querySelectorAll(".input-checkbox")[i].checked){
            filters.push(document.querySelectorAll(".input-checkbox")[i].id);
        }
    }
    let sortingMethod = document.getElementById("select-sorting-method").options[document.getElementById("select-sorting-method").selectedIndex].value; 
    if(name.length == 0 && filters.length == 0){
        if(sortingMethod == 2){
            console.log(url);
            return url;
        }
    }
    url += "?"
    if(name.length != 0){
        url += `name=${name}`;
    }
    if(filters.length != 0){
        if(name.length != 0){
            url += "&";
        }
        let adicionados = 0;
        for(let i = 0; i < filters.length; i++){
            if(adicionados != 0){
                url += "&";
            }
            url += `filters=${filters[i]}`;
            adicionados++;
        }
    }
    if(name.length != 0 || filters.length != 0){
        url += "&";
    }
    url += `sortingMethod=${parseInt(sortingMethod)}`;
    console.log(url);
    return url;
}

async function carregarChamps(){
    let dados = await fetch(constroiURL());
    let json = await dados.json();
    let divChamps = document.getElementById("grid-campeoes");
    divChamps.innerHTML = "";
    json.forEach(champ => {
        divChamps.innerHTML += `<div class="card">
                                    <img src="${champ.image}" width="240" height="240" alt="${champ.name}">
                                    <div class="card-info-bg">
                                        <p class=" text-capitalize">${champ.name}</p>
                                        <span>
                                            <p class="preco-rp">${champ.rpPrice}</p>
                                            <p class="preco-ea">${champ.eaPrice}</p>
                                        </span>
                                    </div>
                                </div>` 
    });
};

let elementsTriggerEventCheckbox = document.getElementsByClassName("input-checkbox");

for(let i = 0; i < elementsTriggerEventCheckbox.length; i++){
    elementsTriggerEventCheckbox[i].addEventListener('click', carregarChamps);
}

let elementTriggerEventSelect = document.getElementById("select-sorting-method");

elementTriggerEventSelect.addEventListener('change', carregarChamps);

let elementTriggerEventSearch = document.getElementById("input-search-champ");

elementTriggerEventSearch.addEventListener('input', carregarChamps);

window.addEventListener("load", carregarChamps());
