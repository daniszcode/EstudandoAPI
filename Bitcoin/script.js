const res = document.querySelector(".res");

function conteudo() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((item) => {
      res.innerText = ("R$ " + item.BRL.buy).replace(".", ",");
    });
}
setInterval(conteudo, 10);

conteudo();

// function timedText() {
//   var res = document.querySelector(".res");
//   setTimeout(function () {
//     console.log("mudou");
//     res.style.backgroundColor = "pink";
//   }, 2000);
//   var res = document.querySelector(".res");
//   setTimeout(function () {
//     console.log("mudou");
//     res.style.backgroundColor = "red";
//   }, 3000);
// }
