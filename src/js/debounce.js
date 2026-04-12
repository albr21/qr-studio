APP.debounce = function (fn, delay) {
  var timer;
  return function () {
    clearTimeout(timer);
    var args = arguments;
    var ctx  = this;
    timer = setTimeout(function () { fn.apply(ctx, args); }, delay);
  };
};
