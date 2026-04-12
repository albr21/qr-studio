APP.controls = APP.controls || {};

APP.controls.initExport = function () {

  var tabs = document.querySelectorAll('#fmtTabs .fmt-tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      APP.state.format = tab.dataset.fmt;
    });
  });

  document.getElementById('downloadBtn').addEventListener('click', function () {
    APP.qr.download(APP.state.format);
    APP.setStatus('Downloaded as ' + APP.state.format.toUpperCase(), 2000);
  });

  var copyBtn = document.getElementById('copyBtn');
  copyBtn.addEventListener('click', function () {
    var canvas = APP.qr.getCanvas();
    if (!canvas) return;

    function fallback() {
      var win = window.open();
      win.document.write('<img src="' + canvas.toDataURL('image/png') + '" style="max-width:100%"/>');
      copyBtn.textContent = '↗ Opened';
      APP.setStatus('Clipboard blocked - image opened in new tab', 3000);
      setTimeout(function () { copyBtn.textContent = '⎘ Copy'; }, 2500);
    }

    if (!navigator.clipboard || !window.ClipboardItem) {
      fallback();
      return;
    }

    canvas.toBlob(function (blob) {
      navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
        .then(function () {
          copyBtn.textContent = '✓ Copied';
          APP.setStatus('Copied to clipboard', 2000);
          setTimeout(function () { copyBtn.textContent = '⎘ Copy'; }, 2000);
        })
        .catch(function () { fallback(); });
    }, 'image/png');
  });

  window.addEventListener('resize', APP.debounce(function () {
    APP.fitCard();
  }, 80));
};