const btn = document.querySelector(".btn-generation");
const conteudo = document.querySelector(".conteudo");

btn.addEventListener("click", function req() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then(
      (item) => (conteudo.innerHTML = `<p class="paragraph">${item.value}</p>`)
    );
});
