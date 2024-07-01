const button = document.querySelector('botao-comporta');
const section = document.querySelector('section.texto');

let estadoComporta = "FECHADA";
document.getElementById("botao-comporta").addEventListener("click", () => {
  if (estadoComporta === "FECHADA") {
    section.textContent = 'COMPORTA ABERTA'
    estadoComporta = "ABERTA";
    enviarInformacao("COMPORTA ABERTA");
  } else {
    section.textContent = 'COMPORTA FECHADA'
    estadoComporta = "FECHADA";
    enviarInformacao("COMPORTA FECHADA");
  }
});

function enviarInformacao(informacao) {
  const xhr = new XMLHttpRequest();
  // substituir esp01_ip_address pelo ip do meu esp
  xhr.open("GET", `http://ESP01_IP_ADDRESS/comporta?estado=${informacao}`, true);
  xhr.send();
}