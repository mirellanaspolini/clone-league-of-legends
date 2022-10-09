var loading_gif = document.querySelector(".loading");
loading_gif.innerHTML = `<img class="img" width="400" src="gif-loading.gif">`;

var x = document.querySelector(".img");
setTimeout(() => {
    x.style.display = "none";
    document.querySelector(".client").style.visibility = "visible";
    setTimeout(() => {
        location.href = "/clone-league-of-legends/client/";
    }, 2000);
}, 2000);
