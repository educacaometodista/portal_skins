function bannerRemove() {
  let banner = document.querySelector(".allCard");
  banner.remove();
}

function bannerChange() {
  let banner = document.querySelector("img[src='http://portal.metodista.br/imagens/banners/banner-bolsa-social.png']");

  banner.src = 'http://portal.metodista.br/imagens/banners/banner-bolsa-social-ead.png';
}

// Data atual
const actualTimestamp = new Date().getTime();

// Data final (quando deverá ser removido)
const removeTimestamp = new Date("Dec 06, 2019 00:00:00").getTime();

if (actualTimestamp >= removeTimestamp) { bannerRemove() }