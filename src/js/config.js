APP.buildOptions = function () {
  const s = APP.state;

  const dotsOptions = {
    type:     s.dotStyle,
    color:    s.useGradient ? undefined : s.dotColor,
    gradient: s.useGradient ? {
      type:      s.gradientType,
      rotation:  45,
      colorStops: [
        { offset: 0, color: s.dotColor },
        { offset: 1, color: s.dotColor2 },
      ],
    } : undefined,
  };

  const opts = {
    width:  s.size,
    height: s.size,
    type:   'canvas',
    data:   s.data || 'https://example.com',
    margin: s.margin,
    qrOptions:           { errorCorrectionLevel: s.errorCorrection },
    dotsOptions,
    backgroundOptions:   { color: s.bgColor },
    cornersSquareOptions: { type: s.cornerSquareStyle, color: s.cornerSquareColor },
    cornersDotOptions:   { type: s.cornerDotStyle,    color: s.cornerDotColor },
  };

  if (s.logoDataUrl) {
    opts.image = s.logoDataUrl;
    opts.imageOptions = {
      crossOrigin: 'anonymous',
      margin: 6,
      imageSize: s.logoSize,
      hideBackgroundDots: true,
    };
  }

  return opts;
};
