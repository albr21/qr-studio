APP.setStatus = function (msg, duration) {
  var el = document.getElementById('statusMsg');
  if (!el) return;
  el.textContent = msg;
  if (duration > 0) {
    setTimeout(function () {
      var el2 = document.getElementById('statusMsg');
      if (el2) el2.textContent = 'Ready';
    }, duration);
  }
};