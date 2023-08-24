const loading_gif = document.querySelector(".loading");
loading_gif.innerHTML = `<img class="img" width="400" src="gif-loading.gif">`;

const x = document.querySelector(".img");
setTimeout(() => {
    x.style.display = "none";
    document.querySelector(".client").style.visibility = "visible";
    setTimeout(() => {
        location.href = "/clone-league-of-legends/client/";
    }, 2500);
}, 2500);
