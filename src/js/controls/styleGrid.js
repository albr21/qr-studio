APP.controls = APP.controls || {};

APP.controls.initStyleGrids = function () {

  function bind(gridId, stateKey) {
    var grid = document.getElementById(gridId);
    if (!grid) return;

    grid.querySelectorAll('.style-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        grid.querySelectorAll('.style-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        APP.state[stateKey] = btn.dataset.val;
        APP.qr.update();
      });
    });
  }

  bind('dotStyleGrid',     'dotStyle');
  bind('cornerSquareGrid', 'cornerSquareStyle');
  bind('cornerDotGrid',    'cornerDotStyle');
};
