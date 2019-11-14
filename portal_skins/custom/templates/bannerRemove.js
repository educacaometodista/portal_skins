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
// const removeDate = new Date(2019, 11, 15, 03, 0, 0);
// const removeTimestamp = removeDate.getTime()

// if (actualTimestamp >= removeTimestamp) { bannerChange() }



// Data final apenas para teste
const removeTestDate = new Date(2019, 11, 14, 17, 0, 0);
const removeTestTimestamp = removeTestDate.getTime()

// Modelo de teste
if (actualTimestamp >= removeTestTimestamp) { bannerRemove() }