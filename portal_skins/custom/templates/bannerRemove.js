function bannerRemove() {
  let banner = document.querySelector("#carouselBanner8");
  banner.remove();
}

function bannerChange() {
  let banner = document.querySelector("img[src='http://portal.metodista.br/imagens/banners/banner-bolsa-social.png']");

  banner.src = 'http://portal.metodista.br/imagens/banners/banner-bolsa-social-ead.png';
}

// Data atual
const actualDate = new Date();
const actualTimestamp = actualDate.getTime();

// Data final (quando deverá ser removido)
const removeDate = new Date(2019, 10, 15, 00, 0, 0);
const removeTimestamp = removeDate.getTime()

if (actualTimestamp >= removeTimestamp) { bannerChange() }