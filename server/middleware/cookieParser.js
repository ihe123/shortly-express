const parseCookies = (req, res, next) => {
  req.cookies = {};
  if (req.headers.cookie) {
    var cookies = req.headers.cookie.split('; ');
    cookies.forEach(function(cookie) {
      var parts = cookie.split('=');
      req.cookies[parts[0]] = parts[1];
    });
  }
  next();
};

module.exports = parseCookies;