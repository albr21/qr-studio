APP.controls = APP.controls || {};

APP.controls.initColors = function () {

  function bindColor(inputId, stateKey) {
    var input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener('input', function () {
      APP.state[stateKey] = input.value;
      APP.qr.update();
    });
  }

  bindColor('dotColor',       'dotColor');
  bindColor('dotColor2',      'dotColor2');
  bindColor('bgColor',        'bgColor');
  bindColor('cornerSqColor',  'cornerSquareColor');
  bindColor('cornerDotColor', 'cornerDotColor');

  var toggle       = document.getElementById('gradientToggle');
  var gradientExtra = document.getElementById('gradientExtra');

  toggle.addEventListener('change', function () {
    APP.state.useGradient = toggle.checked;
    gradientExtra.classList.toggle('hidden', !toggle.checked);
    APP.qr.rebuild();
  });

  document.getElementById('gradientType').addEventListener('change', function (e) {
    APP.state.gradientType = e.target.value;
    APP.qr.update();
  });
};
