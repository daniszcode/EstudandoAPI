const dadosUsuario = document.querySelector("input.dados");
const dados = dadosUsuario;

document.querySelector(".myBtn").addEventListener("click", function req() {
  console.log(dados.value);
  fetch(`https:viacep.com.br/ws/${dados.value}/json/`)
    .then((response) => response.json())
    .then((item) => {
      document.querySelector(".conteudo").innerHTML = `<table>
                                                       <tr>CEP: ${item.cep}</tr></br>
                                                       <tr>Logradouro: ${item.logradouro}</tr></br>
                                                       <tr>Estado: ${item.uf}</tr></br>
                                                       <tr>Bairro: ${item.bairro}</tr></br>
                                                       <tr>Localidade: ${item.localidade}</tr></br>
                                                       <tr>Complemento: ${item.complemento}</tr></br>
                                                       </table>
                                                       `;
    });
});
