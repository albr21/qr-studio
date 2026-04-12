APP.controls = APP.controls || {};

APP.controls.initSliders = function () {
  var sizeInput = document.getElementById('qrSize');
  var sizeLabel = document.getElementById('sizeVal');

  sizeInput.addEventListener('input', function () {
    sizeLabel.textContent = parseInt(sizeInput.value, 10) + 'px';
  });
  sizeInput.addEventListener('change', function () {
    APP.state.size = parseInt(sizeInput.value, 10);
    APP.qr.update();
  });

  var marginInput = document.getElementById('qrMargin');
  var marginLabel = document.getElementById('marginVal');

  marginInput.addEventListener('input', function () {
    marginLabel.textContent = marginInput.value;
  });
  marginInput.addEventListener('change', function () {
    APP.state.margin = parseInt(marginInput.value, 10);
    APP.qr.update();
  });

  var logoInput = document.getElementById('logoSize');
  var logoLabel = document.getElementById('logoSizeVal');
  if (logoInput) {
    logoInput.addEventListener('input', function () {
      logoLabel.textContent = Math.round(parseFloat(logoInput.value) * 100) + '%';
    });
    logoInput.addEventListener('change', function () {
      APP.state.logoSize = parseFloat(logoInput.value);
      APP.qr.update();
    });
  }
};
