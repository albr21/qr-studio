APP.getAvailableSize = function () {
  var viewport = document.querySelector('.qr-viewport');
  if (!viewport) return 300;
  var pad = 44 + 48;
  var avail = Math.min(
    viewport.clientWidth  - pad,
    viewport.clientHeight - pad
  );
  return Math.max(60, avail);
};

APP.fitCard = function () {
  var card = document.querySelector('.qr-card');
  if (!card) return;
  var size = APP.getAvailableSize();
  card.style.width  = size + 'px';
  card.style.height = size + 'px';
};
