// the middleware function
module.exports = function (options) {
  return function (req, res, next) {
    if (req.method == 'OPTIONS')
      return next();

  }
};