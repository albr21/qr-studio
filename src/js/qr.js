(function () {
  var _instance  = null;
  var _container = null;

  APP.qr = {
    init: function (container) {
      _container = container;
      _instance  = new QRCodeStyling(APP.buildOptions());
      _instance.append(container);
    },

    update: function () {
      if (!_instance) return;
      _instance.update(APP.buildOptions());
    },

    download: function (format) {
      if (!_instance) return;
      _instance.download({ name: 'qr-studio', extension: format });
    },

    getCanvas: function () {
      return _container ? _container.querySelector('canvas') : null;
    },

    rebuild: function () {
      if (!_container) return;
      _container.innerHTML = '';
      _instance = new QRCodeStyling(APP.buildOptions());
      _instance.append(_container);
    },
  };
})();
