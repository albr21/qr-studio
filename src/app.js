document.addEventListener('DOMContentLoaded', function () {
  var c = APP.controls;

  APP.fitCard();

  APP.qr.init(document.getElementById('qrCanvas'));

  c.initContent();
  c.initSliders();
  c.initStyleGrids();
  c.initColors();
  c.initLogo();
  c.initExport();
});
