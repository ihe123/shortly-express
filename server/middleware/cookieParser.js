const parseCookies = (req, res, next) => {
    req.cookies = {};
    if (req.headers.cookie) {
      var cookies = req.headers.cookie.split('; ');
      cookies.forEach(function(cookie) {
        var parts = cookie.split('=');
        req.cookies[parts[0]] = parts[1];
      })
    } else {
      console.log ('req', req);
      req.session = {};
      req.session.hash = req.cookies;
    }
  next();
};

module.exports = parseCookies;