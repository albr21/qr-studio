APP.controls = APP.controls || {};

APP.controls.initLogo = function () {
  var elInput     = document.getElementById('logoInput');
  var elInfo      = document.getElementById('logoInfo');
  var elFileName  = document.getElementById('logoFileName');
  var elClear     = document.getElementById('clearLogo');
  var elSizeField = document.getElementById('logoSizeField');

  elInput.addEventListener('change', function (e) {
    var file = e.target.files[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function (ev) {
      APP.state.logoDataUrl = ev.target.result;
      elFileName.textContent = '✓ ' + file.name;
      elInfo.classList.remove('hidden');
      elSizeField.classList.remove('hidden');
      APP.controls.setErrorCorrection('H');
      APP.setStatus('Logo loaded - EC bumped to H', 2500);
      APP.qr.update();
    };
    reader.readAsDataURL(file);
  });

  elClear.addEventListener('click', function () {
    APP.state.logoDataUrl = null;
    elInfo.classList.add('hidden');
    elSizeField.classList.add('hidden');
    elInput.value = '';
    APP.qr.update();
  });
};
