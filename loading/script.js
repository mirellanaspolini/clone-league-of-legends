const loadingGif = document.querySelector(".loading");
loadingGif.innerHTML = `<img class="loading-gif" width="400" src="gif-loading.gif">`;

const gif = document.querySelector(".loading-gif");
setTimeout(() => {
    gif.style.display = "none";
    document.querySelector(".client").style.visibility = "visible";
    setTimeout(() => {
        // location.href = "/clone-league-of-legends/client/";
    }, 2500);
}, 2500);
