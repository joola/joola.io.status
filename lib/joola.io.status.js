// the middleware function
module.exports = function (options) {
  return function (req, res, next) {
    if (req.url.substring(0, 7) == '/status') {
      var data = {};
      data.os = {};
      data.os["Environment"] = process.env.JOOLAIO_ENV || 'N/A';
      data.os["Node Version"] = process.version;

      data.dependencies = require('../package.json').dependencies;
      data.devDependencies = require('../package.json').devDependencies;
      return res.render(__dirname + '/../views/status', {data: data});
    }
    else
      return next();

  }
};