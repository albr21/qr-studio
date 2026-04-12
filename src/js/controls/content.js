APP.controls = APP.controls || {};

APP.controls.initContent = function () {
  var elData = document.getElementById('qrData');
  var elEc   = document.getElementById('ecLevel');

  elData.addEventListener('input', function () {
    APP.state.data = elData.value;
    APP.qr.update();
  });

  elEc.addEventListener('change', function () {
    APP.state.errorCorrection = elEc.value;
    APP.qr.update();
  });
};

APP.controls.setErrorCorrection = function (val) {
  APP.state.errorCorrection = val;
  document.getElementById('ecLevel').value = val;
};
