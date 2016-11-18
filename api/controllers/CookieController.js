module.exports = {
  get: function (req, res) {
    return res.json({
      cookies: req.cookies
    });
  },

  set: function (req, res) {
    var key,
        params = req.allParams();

    for (key in params) {
      res.cookie(key, params[key]);
    }

    return res.redirect('/cookies');
  },

  delete: function (req, res) {
    var key,
        params = req.allParams();

    for (key in params) {
      res.clearCookie(key);
    }

    return res.redirect('/cookies');
  }
};
