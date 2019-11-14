
function bannerChange() {
  let banner = document.querySelector("img[src='http://portal.metodista.br/processo-seletivo/bolsa-social/bannerUMESP.png']");

  banner.src = 'http://portal.metodista.br/processo-seletivo/bolsa-social/bannerUMESP2.png';

  let cursosPresenciais = document.querySelectorAll("span.passo span strong span.external-link");

  cursosPresenciais[0].remove();
  cursosPresenciais[2].remove()
}


// Data atual
const actualDate = new Date();
const actualTimestamp = actualDate.getTime();

// Data final (quando deverá ser removido)
const removeDate = new Date(2019, 10, 15, 00, 0, 0);
const removeTimestamp = removeDate.getTime()

if (actualTimestamp >= removeTimestamp) {
  bannerChange();
}