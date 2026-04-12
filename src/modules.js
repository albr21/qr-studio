(function () {
  var modules = [
    'src/js/namespace.js',
    'src/js/debounce.js',
    'src/js/state.js',
    'src/js/config.js',
    'src/js/status.js',
    'src/js/zoom.js',
    'src/js/qr.js',
    'src/js/controls/content.js',
    'src/js/controls/sliders.js',
    'src/js/controls/styleGrid.js',
    'src/js/controls/colors.js',
    'src/js/controls/logo.js',
    'src/js/controls/export.js',

    'src/app.js'
  ];

  for (var i = 0; i < modules.length; i++) {
    document.write('<script src="' + modules[i] + '"><\/script>');
  }
})();


