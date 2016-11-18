module.exports.http = {

  middleware: {

    order: [
      'startRequestTimer',
      'cookieParser',
      // 'session',
      'myRequestLogger',
      'compress',
      'methodOverride',
      // 'poweredBy',
      '$custom',
      'router',
      // 'www',
      // 'favicon',
      '404',
      '500'
    ],

    myRequestLogger: function (req, res, next) {
        console.log("Requested :: ", req.method, req.url);
        return next();
    }

  },

  // cache: 31557600000
};
